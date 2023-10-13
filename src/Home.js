import List from "./List";

import { useRedux } from "./redux/hooks";

const Home = () => {

  const {xauth, profile} = useRedux()

    return (
      <div className="App">
        <header className="App-header">
          {
            xauth && (
              <div>Merhaba {profile.firstName} {profile.lastName}</div>
            )
          }
          <List />
        </header>
      </div>
    );
}

export default Home