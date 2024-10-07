import "./Table.css";

export default function Table({ character }) {

    const tableData = character.map((char, i) => (
      <tr key={i}>
        <td>{char.name}</td>
        <td>{char.height}</td>
        <td>{char.hair_color}</td>
        <td>{char.gender}</td>
      </tr>
    ));
    return (
      <table id="mainTable">
        <thead>
          <tr id="headerRow">
            <td>Name</td>
            <td>Height</td>
            <td>Hair Color</td>
            <td>Gender</td>
          </tr>
        </thead>
        <tbody id="tableBody">{tableData}</tbody>
      </table>
    );
}
