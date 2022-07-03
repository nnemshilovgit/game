export const SkillBlock = ({ upSkill, keyNameSkill, nameSkill, level}) => {
    return (
        <div style={{margin: '10px',}}>{nameSkill}: {level} <button style={{margin: '10px',}} onClick={() => upSkill(keyNameSkill)}>Повысить уровень навыка персонажа</button>
            </div>
    );    
};