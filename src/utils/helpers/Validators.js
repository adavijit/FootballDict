export const validateInput=(obj)=> {
    return obj.name === "" ||
      obj.country === "" ||
      obj.deb_year === "" ||
      obj.former_club === "" ||
      obj.curr_club === "" ||
      obj.position === "" ||
      obj.assists === "" ||
      obj.freekick_scored === "";
}
