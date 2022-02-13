import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import EditPage from './pages/EditPage';
import NewFeedPage from './pages/NewFeedPage';
import RoadmapPage from './pages/RoadmapPage';

import FeatureCtx from './hooks/DataCtx';

function App() {
  const [data, setData] = useState([
    {
      currentUser: {},
      productRequests: [
        {
          id: 1,
          title: 'Add tags for solutions',
          category: 'enhancement',
          upvotes: 112,
          status: 'suggestion',
          description:
            'Easier to search for solutions based on a specific stack.',
          comments: [
            {
              id: 1,
              content:
                'Awesome idea! Trying to find framework-specific projects within the hubs can be tedious',
              user: {
                image: './assets/user-images/image-suzanne.jpg',
                name: 'Suzanne Chang',
                username: 'upbeat1811',
              },
            },
            {
              id: 2,
              content:
                'Please use fun, color-coded labels to easily identify them at a glance',
              user: {
                image: './assets/user-images/image-thomas.jpg',
                name: 'Thomas Hood',
                username: 'brawnybrave',
              },
            },
          ],
        },
      ],
    },
  ]);

  const [jsonLoaded, setJsonLoaded] = useState(false);
  const [feature, setFeature] = useState(undefined);
  const [currentSug, setCurrentSug] = useState(undefined);
  const [reply, setReply] = useState({ id: null, reply: false });

  useEffect(() => {
    const getData = () => {
      fetch('data.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((newObj) => {
          setData([newObj]);
          setJsonLoaded(true);
        });
    };

    getData();
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'productRequests',
      JSON.stringify(data[0].productRequests)
    );
    localStorage.setItem('currentUser', JSON.stringify(data[0].currentUser));

    console.log(
      'loaded to localStorage',
      JSON.parse(localStorage.getItem('productRequests'))
    );
  }, [data]);

  return (
    <FeatureCtx.Provider
      value={{
        feature,
        setFeature,
        currentSug,
        setCurrentSug,
        jsonLoaded,
        reply,
        setReply,
      }}
    >
      <Routes>
        <Route index path="/" element={<MainPage jsonLoaded={jsonLoaded} />} />
        <Route path="detail" element={<DetailPage />} />
        <Route path="edit" element={<EditPage />} />
        <Route path="new-feedback" element={<NewFeedPage />} />
        <Route path="roadmap" element={<RoadmapPage />} />
      </Routes>
    </FeatureCtx.Provider>
  );
}

export default App;
