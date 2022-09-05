function Box(props){
  return(
    <div style={
      {"backgroundColor":props.background, "padding":"1rem"}
    }>
      <h1 style={{"color":props.color, "fontSize":"3rem"  
      }}>{props.text}
      </h1>
      <p className={props.textClass}
      >Lorem ipsum dolor, sit 
        amet consectetur adipisicing 
        elit. Nihil sequi reprehenderit
        beatae quae laboriosam enim f
        ugit delectus at? Ducimus, 
        delectus.</p>
    </div>
  )
}
export default Box