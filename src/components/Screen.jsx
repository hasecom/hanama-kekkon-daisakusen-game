const style ={
  position:"absolute",
	top:"0",
	left:"0",
  right:"0",
  bottom:"0",
	width:"100%",
	height: "100%",
	margin: "0",
  objectFit:"cover"
}
const Screen = props => {

  const {name} = (props.display.filter((obj) => obj.param == props.screenId))[0];
  return(
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/screen/${name}.jpg`} style={style} />
    </div>
  )
  }
export default Screen