import React from 'react';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';

const area = 'persons';
const apiUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

const App = () => {
    const { promiseInProgress } = usePromiseTracker({ area });
    const [ persons, setPersons ] = useState(null);

    useEffect(() => {
      trackPromise(axios.get(apiUrl), area).then(({ data }) => {
        setPersons(data);
      });
    }, [setAppState]);

    return (
      <div className="app">
          {promiseInProgress
            ? <div>Подождите, данные загружаются!</div>
            : <Component data={persons} /> }
      </div>
    );
  }

  export default App;