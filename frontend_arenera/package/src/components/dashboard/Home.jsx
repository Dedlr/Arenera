import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import Slider from './Slider';
import "../../assets/css/main.css"


const ProjectTables = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle className="bienvenidos">BIENVENIDOS</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h5" >
            <center>Sistema Administrativo</center>
          </CardSubtitle>

        </CardBody>
      </Card>

      <Slider></Slider>

    </div>
  );
};

export default ProjectTables;
