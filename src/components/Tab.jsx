import '../App.css';

function Tab(props) {
    const handleClick = () => {
        props.setSelectedTab(props.idx);
        console.log(props.idx)
    }

    return (
        <div className={props.idx === props.selectedTab ? 'tab-container tab-selected' : 'tab-container'} onClick={handleClick}>
            <h2>
                {props.name}
            </h2>
        </div>
    );
};

export default Tab;