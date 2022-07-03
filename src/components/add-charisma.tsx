export const AppCharisma = ({ withdrawalCharisma} ) => {
    return (
        <div className="app-level" onClick={() => withdrawalCharisma() }>
            <div style={{margin: '5px'}}>Увеличить значение</div>
        </div>
    );
};