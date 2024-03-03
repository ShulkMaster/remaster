import rematchLogo from '@/assets/rematch.svg';
import reactLogo from '@/assets/react.svg';
export const Counter = () => {
  return (
    <div>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="spinning logo react" alt="React logo"/>
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={rematchLogo} className="logo" alt="Vite logo"/>
        </a>
      </div>
      <h1>React + Rematch</h1>
      <div className="card">
        <button>
          count is 5
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
