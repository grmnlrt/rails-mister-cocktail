import $ from "jquery";
import select2 from "select2";

import 'select2/dist/css/select2.css';

const improveDropdown = () => {
  $(document).ready(function() {
    $('.beautiful-dropdown').select2();
  });
}

export default improveDropdown;
