export const AppIntecligy = ({ withdrawalIntecligy} ) => {
    return (
        <div className="app-level" onClick={() => withdrawalIntecligy() }>
            <div style={{margin: '5px'}}>Увеличить значение</div>
        </div>
    );
};