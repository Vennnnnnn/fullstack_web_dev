function TeamMember(name, role, image) {
  return (
    <div>

      <img src={image} alt={name} width="100px" />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

export default TeamMember;
