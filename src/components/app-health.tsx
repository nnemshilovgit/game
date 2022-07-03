export const AppHealth = ({ withdrawalHealth} ) => {
    return (
        <div className="app-level" onClick={() => withdrawalHealth() }>
            <div style={{margin: '5px'}}>Увеличить значение</div>
        </div>
    );
};