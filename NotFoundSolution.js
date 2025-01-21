```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      {/* No nested routes here */}
    </div>
  );
}

export default App;
```
This corrected version removes the nested routes from `NotFound`.  The `NotFound` component now only handles the display of the 404 error message.  All routing logic is managed at the top-level `Routes` component, which correctly handles the catch-all route (`path="*"`) without interference from nested routes.