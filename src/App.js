import { useState } from 'react';
import './App.css';
import Tab from './components/Tab';
import Data from './Data.json'

function App() {
	const [selectedTab, setSelectedTab] = useState(0);
	const tabs = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5'];

	return <div className="app-container">
		<div className='app-tab-content-container'>
			<div className='app-tab-container'>
				{tabs.map((name, idx) => {
					return <Tab key={idx} name={name} idx={idx} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />;
				})}
			</div>

			<div className='app-content-container'>
				{Data.filter((ele, idx) => idx === selectedTab).map((ele, idx) => {
					return <div key={idx} className='app-content'>
						<h1>{ele.title}</h1>
						<p>{ele.content}</p>
					</div>
				})}
			</div>
		</div>

	</div>;
}

export default App;
