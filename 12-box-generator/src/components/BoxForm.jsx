import React, {useState} from 'react';

const BoxForm = () => {

    let [boxColor, setBoxColor] = useState (""); 
    let [boxWidth, setBoxWidth] = useState (null);
    let [boxHeight, setBoxHeight] = useState (null);
    let [boxList, setBoxList] = useState ([]);

    const submitBox = (e) => {
        e.preventDefault();
        //pull values from form
        boxWidth = boxWidth + "px";
        boxHeight = boxHeight + "px";
        let box = {boxColor, boxWidth, boxHeight};
        //setState
        setBoxList([...boxList, box]);
        //clear out the form
        setBoxColor("")
        setBoxWidth(0)
        setBoxHeight(0)
    }

    return(
        <>
            <form onSubmit={submitBox}>
                <h1>Create Box</h1>
                <div className="form-object">
                    <label htmlFor="boxColor">Box Color</label>
                    <input type="text" onChange={(e)=>{setBoxColor(e.target.value)}} name="boxColor" id="boxColor" value={boxColor} />
                </div>
                <div className="form-object">
                    <label htmlFor="boxWidth">Box Width</label>
                    <input type="number" onChange={(e)=>{setBoxWidth(e.target.value)}} name="boxWidth" id="boxWidth" value={boxWidth} />
                </div>
                <div className="form-object">
                    <label htmlFor="boxHeight">Box Height</label>
                    <input type="number" onChange={(e)=>{setBoxHeight(e.target.value)}} name="boxHeight" id="boxHeight" value={boxHeight} />
                </div>
                <input type="submit" value="Add" />
            </form>
            <hr />
            <div className='boxList'>
                    {
                        boxList.map((boxObj, idx) =>{
                            return(
                                <div key={idx} className='box' style={{height: boxObj.boxHeight, width: boxObj.boxWidth, backgroundColor: boxObj.boxColor}}></div>
                            )
                        })
                    }
            </div>
        </>
    );

}

export default BoxForm;