import Link from 'next/link';

const App = () => {
  return (
    <main className=" mainContainer">
      <div className="container text-light">
      <div>
      <h1>Example Component</h1>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          {/* Add other navigation links as needed */}
        </ul>
      </nav>
    </div>
        <div className="row">
          <div className="col">
            <h1>Hello, Bootstrap 5 in Next.js!</h1>
            <button className="btn btn-primary">Primary Button</button>
          </div>
          
        </div>
      </div>
    </main>
  );
};

export default App;
