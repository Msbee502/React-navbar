function App () {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Gallery />} />
      </Routes>
      </BrowserRouter>


      {/*... */}
    </div>
  );
}