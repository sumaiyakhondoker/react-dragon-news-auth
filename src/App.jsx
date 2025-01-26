// Inside a JSX component

function App() {
  return (
    <div className="p-5">
      <button className="btn btn-primary">DaisyUI Button</button>
      <p className="text-blue-500 uppercase">nabila</p>
      <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div className="my-1 flex w-full justify-center gap-1">
  <kbd className="kbd">q</kbd>
  <kbd className="kbd">w</kbd>
  <kbd className="kbd">e</kbd>
  <kbd className="kbd">r</kbd>
  <kbd className="kbd">t</kbd>
  <kbd className="kbd">y</kbd>
  <kbd className="kbd">u</kbd>
  <kbd className="kbd">i</kbd>
  <kbd className="kbd">o</kbd>
  <kbd className="kbd">p</kbd>
</div>
<div className="my-1 flex w-full justify-center gap-1">
  <kbd className="kbd">a</kbd>
  <kbd className="kbd">s</kbd>
  <kbd className="kbd">d</kbd>
  <kbd className="kbd">f</kbd>
  <kbd className="kbd">g</kbd>
  <kbd className="kbd">h</kbd>
  <kbd className="kbd">j</kbd>
  <kbd className="kbd">k</kbd>
  <kbd className="kbd">l</kbd>
</div>
<div className="my-1 flex w-full justify-center gap-1">
  <kbd className="kbd">z</kbd>
  <kbd className="kbd">x</kbd>
  <kbd className="kbd">c</kbd>
  <kbd className="kbd">v</kbd>
  <kbd className="kbd">b</kbd>
  <kbd className="kbd">n</kbd>
  <kbd className="kbd">m</kbd>
  <kbd className="kbd">/</kbd>
</div>
    </div>
  );
}

export default App;
