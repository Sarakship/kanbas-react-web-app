function ClickEvent() {
    const hello = () => {
      alert("Hello World!");
    };
    const lifeIs = (good: string) => {
      alert(`Life is ${good}`);
    };
    return (
      <div>
        <h2>Click Event</h2>
        <button 
         type="button"
         className="btn btn-success m-1 "
         style={{ height: "fit-content", width: "100px", borderColor: "#d3d3d3" }}
        onClick={hello}>
          Click Hello</button>
        <button 
         type="button"
         className="btn btn-warning m-1 "
         style={{ height: "fit-content", width: "180px", borderColor: "#d3d3d3" }}
        onClick={() => lifeIs("Good!")}>
          Click Good</button>
        <button
           type="button"
           className="btn btn-primary m-1 "
           style={{ height: "fit-content", width: "150px", borderColor: "#d3d3d3" }}
          onClick={() => {
            hello();
            lifeIs("Great!");
          }}
        >
          Click Hello 3
        </button>
      </div>
    );
  }
  export default ClickEvent;