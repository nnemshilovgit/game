export const AppAgility = ({ withdrawalAgility} ) => {
    return (
        <div className="app-level" onClick={() => withdrawalAgility() }>
            <div style={{margin: '5px'}}>Увеличить значение</div>
        </div>
    );
};