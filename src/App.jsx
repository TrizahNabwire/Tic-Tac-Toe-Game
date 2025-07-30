function Square(){
  return <button className="square">1</button>;
}

export default function Board(){
  return(
    <>
    <div className="row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="row">
      <Square />
      <Square />
      <Square />
    </div>
    </>
  )
}