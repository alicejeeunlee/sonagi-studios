import React from 'react';
import Home from './pages/home';
import Footer from './components/footer';
import parseRoute from './lib/parse-route';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  renderPage() {
    const { path } = this.state.route;
    if (path === 'home' || path === '') {
      return <Home state={this.state} />;
    }
  }

  render() {
    return (
      <>
        <div className='bg'>
          <Home />
        </div>
        <Footer />
      </>
    );
  }
}
