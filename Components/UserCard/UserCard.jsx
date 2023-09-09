export default function UserCard({data}) {

  if(data.message){
    return (
    <div className="user-card">
<h2>Username doesn't exist</h2>

    </div>
    )
  } else {
    return (
      <div className="user-card">
        <div>
          <img src={data.avatar_url} alt="avatar" />
        </div>
        <div>
          <h5> Name: {data.name}</h5>
          <p> Username: {data.login} </p>
        </div>
      </div>
    );
  }
  
}
