import React, { useState } from 'react';
import background from '../../assets/background-2.jpg';
import styles from './Bodysize.module.scss';
import Dropdown from '../../components/Dropdown/Dropdown';
import measurement from '../../assets/measurement.png'
import Label from '../../components/Label/Label';

const Bodysize = (props) => {
    const { gender, setType } = props;
    const [height, setHeight] = useState({value:0, unit:"cm"})
    const [hip, setHip] = useState({value:0, unit:"cm"})
    const [chest, setChest] = useState({value:0, unit:"cm"})
    const [waist, setWaist] = useState({value:0, unit:"cm"})
    const [bust, setBust] = useState({value:0, unit:"cm"})

    const [show, setShow] = useState(false)

    const convertToMeter = (unit, value) => {
        var meter;
        switch(unit) {
            case 'meter':
                meter = value;
                break;
            case 'cm':
                meter = value/100;
                break;
            case 'inch':
                meter = value/39.37;
                break;
            default: break;
        }
        return meter;
    }

    return (
    <div>
        {/* <Label label="Add your body measurements" /> */}
            <h1 className={styles.bodySizeTitle}>Add your body measurements</h1>
        <div className={styles.container}>
            <img src={background} alt="background" />
            <div className={`${styles.positionContainer}  ${!show && styles.end}`}>
                {show?
                <div className={styles.instructionsWrapper}>
                    <img src={measurement} alt="measument" />
                </div>:null}

                <div className={`${styles.detailsContainer}`}>
                    <div className={styles.sizeWrapper}>
                        {gender==='man'?<div className={styles.inputWrapper}>
                            <label>Height</label>
                            <input type="number" value={height.value} onChange={(e) => setHeight({...height, value: e.target.value}) }  />
                            <Dropdown value={height.unit} setValue={(e) => setHeight({...height, unit: e.target.value})} />
                        </div>: <></>}
                        {gender === 'woman'? <div className={styles.inputWrapper}>
                            <label>Bust</label>
                            <input type="number" value={bust.value} onChange={(e) => setBust({...bust, value: e.target.value}) }  />
                            <Dropdown value={bust.unit} setValue={(e) => setBust({...bust, unit: e.target.value})} />
                        </div>: <></>}
                        {gender==='man'?<div className={styles.inputWrapper}>
                            <label>Chest</label>
                            <input type="number" value={chest.value} onChange={(e) => setChest({...chest, value: e.target.value}) }  />
                            <Dropdown value={chest.unit} setValue={(e) => setChest({...chest, unit: e.target.value})} />
                        </div>:<></>}
                        <div className={styles.inputWrapper}>
                            <label>Waist</label>
                            <input type="number" value={waist.value} onChange={(e) => setWaist({...waist, value: e.target.value}) }  />
                            <Dropdown value={waist.unit} setValue={(e) => setWaist({...waist, unit: e.target.value})} />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label>Hip</label>
                            <input type="number" value={hip.value} onChange={(e) => setHip({...hip, value: e.target.value}) }  />
                            <Dropdown value={hip.unit} setValue={(e) => setHip({...hip, unit: e.target.value})} />
                        </div>
                    </div>
                    {!show? <p onClick={() => setShow(true)}>How to measure?</p>:
                    <p onClick={() => setShow(false)}>Close Measuring Guide</p>}
                    <h3 onClick={() => {setType('type')}}>Use my body type instead</h3>

                </div>
            </div>
            <button>Proceed</button>
        </div>
    </div>
  )
}

export default Bodysize