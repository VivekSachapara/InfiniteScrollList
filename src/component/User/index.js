import "../../styles/style.css";
/**
 * user functional component
 * @param {*} props 
 * @returns 
 */
const User = props => {
    const { data } = props;
    return (
        <>
            <img src={data.picture.large} alt={data.name.first} className="picture"></img>
            <div className="userName">
                {
                    `${data.name.first} ${data.name.last}`
                }
            </div>
        </>
    )
}
export default User;
