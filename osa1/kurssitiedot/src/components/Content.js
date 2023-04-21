const Content = ({course}) => {
 return (
<div>
    {course.map(x => 
    <div key= {x.id}>
    <h2 >{x.name}</h2>
    {x.parts.map(x =><li key={x.id}>{x.name} {x.exercises}</li>)}
    <p>Total of exercises {x.parts.map(x => x.exercises).reduce((a, b) => a+b)}</p>
    </div>)}
</div>
    )
  }

export default Content