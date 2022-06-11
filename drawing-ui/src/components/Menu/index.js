import React from "react";
import {Link} from 'react-router-dom';
import "./index.css";

const Menu = ({ setLineColor, setLineWidth,
setLineOpacity, onSave }) => {
return (
	<div className="Menu">
	<label>Brush Color </label>
	<input
		type="color"
		onChange={(e) => {
			setLineColor(e.target.value);
		}}
	/>
	<label>Brush Width </label>
	<input
		type="range"
		min="3"
		max="20"
		onChange={(e) => {
			setLineWidth(e.target.value);
		}}
	/>
	<label>Brush Opacity</label>
	<input
		type="range"
		min="1"
		max="100"
		onChange={(e) => {
			setLineOpacity(e.target.value / 100);
		}}
	/>
	<div>
		<button onClick={onSave} style={{margin:"0 1rem 0 0"}}>Save</button>
		<Link to="/"><button>Drawing List</button></Link>
	</div>
	</div>
);
};

export default Menu;
