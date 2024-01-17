import az204 from "../assets/images/azure-developer-associate-600x600.png";
import az400 from "../assets/images/azure-devops-engineer-expert-600x600.png";

function Certificate() {
  const certs = [
    {
      name: "Azure Developer Certificate",
      imageUrl: az204,
      url: "https://learn.microsoft.com/api/credentials/share/en-us/41012948/33F48BE03911C07C?sharingId=117A2EE4C23A5BEA",
    },
    {
      name: "Azure Developer Certificate",
      imageUrl: az400,
      url: "https://learn.microsoft.com/api/credentials/share/en-us/41012948/738E6B3882D9F840?sharingId=117A2EE4C23A5BEA",
    },
  ];
  const render = certs.map((item) => {
    return (
      <a href={item.url}>
        <img src={item.imageUrl} alt={item.name} />
      </a>
    );
  });
  return <p className="certificates">{render}</p>;
}

export default Certificate;
