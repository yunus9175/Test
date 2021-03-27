import{Row,Col,Container} from 'react-bootstrap';
import intelyEd from './../assets/image/intelyEd.png';
import vector from './../assets/image/Vector.png';
import comp from './../assets/image/compress.png';
import exp from './../assets/icons/expand.png';
import cog from './../assets/image/cog.png';
import '../assets/style.css'
import React,{ useState } from 'react';

function Headerchild(props) {
    // const[expand,setExpand]=useState(false);
    // data=expand;
//    console.log(data)
//    const Expanddata=()=>{
//     setExpand(false);
//     props.data(false)
//    console.log(expand)

//    }
//    const Compreseddata=()=>{
//        setExpand(true);
//        props.data(true)
//          console.log(expand)

//    }
    return (
        // <Container className="edcontaner" style={{background:'white'}} >
        //     <Row className="edhead">
        //         <Col style={{right:0}}><img src={intelyEd}alt="IntelyEdLogo"/></Col>
        //         <Col style={{marginLeft:"1090px"}}>

        //             <span>
        //             <input className="edsearchinput" type="text" placeholder="Search" style={{width:'160px',height:'19px'}}/>
        //             <i className="edsearchicon"><img style={{marginLeft:"px"}} src={vector} alt="vector"/></i>
        //             </span>
        //             </Col>
        //             <Col>
        //             <i><img style={{marginLeft:"10px"}}alt="compression" src={comp}/></i>
        //             </Col>
        //             <Col>
        //             <i><img style={{marginLeft:"10px"}}alt="Cog" src={cog}/></i>
                    
        //             </Col>
                   
        //     </Row>
        // </Container>
        <div  className="edhead" style={{background:'white',boxShadow:"0 0px 5px",height:'60px',paddingTop:'15px'}}>
        {/* <Container fluid> */}
            {/* <Row className="justify-content-between"> */}
                {/* <Col lg={6}md={3}> <img src={intelyEd}alt="IntelyEdLogo" style={{marginLeft:'15px'}}/></Col> */}
                {/* <Col lg={5}md={8}sm={5}></Col> */}
                {/* <Col  lg={{ span: 1.5, offset: 4 }} style={{marginLeft:'25.333333%'}}> */}
                    
                    {/* <div className="edsearch"  > <input className="edsearchinput " type="text" placeholder="Search" /><img src={vector} alt="vector"/></div></Col> */}
                {/* <Col >{expand?<img alt="compression" src={exp} onClick={()=>Expanddata(setExpand(true))}/>:<img alt="compression" style={{}} src={comp} onClick={()=>Compreseddata(setExpand(true))}/>}</Col> */}
                {/* <Col ><img style={{marginLeft:'-70px'}}alt="Cog" src={cog}/></Col> */}
                

            {/* </Row> */}
            
        {/* </Container> */}
            <div className="row row1">
                <div className="col1"><img src={intelyEd}alt="IntelyEdLogo" /></div>
                
                <div className="col2 edsearch" > <input className="edsearchinput " type="text" placeholder="Search" /><img src={vector} alt="vector"/></div>
                
                <div className="col3">{

                !props.sidebar
                ?
                
                <img alt="compression" src={exp} onClick={()=>{props.showSidebar(true)}}/>
                :
                
                
                <img alt="compression"  src={comp} onClick={()=>{props.showSidebar(false)}}/>}</div>
                <div className="col4"><img alt="Cog" src={cog}/></div>
               
            </div>
      
        </div>
        
    )
}

export default Headerchild
