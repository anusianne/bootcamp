import Box from "./Box"
import './GridOfBoxes.css'

export default function GridOfBoxes({colors}) {
const boxes = [];
for (let i = 0; i < 25; i++) {
    boxes.push(<Box colors={colors}/>)
}
    return <div className="GridOfBoxes">
        {boxes}
    </div>
}