import Header from '../components/Header';
import MainContent from '../components/MainContent';

import '../scss/MainPage.scss';

const Main = ({ jsonLoaded }) => {
  return (
    <div className="main">
      <Header />
      <MainContent jsonLoaded={jsonLoaded} />
    </div>
  );
};

const MainPage = ({ jsonLoaded }) => {
  return <Main jsonLoaded={jsonLoaded} />;
};

export default MainPage;
