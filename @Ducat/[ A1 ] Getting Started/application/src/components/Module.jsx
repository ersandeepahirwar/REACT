const Module = () => <p>Module</p>;

const number = 9;
const string = "Application";
const array = ["A", "B", "C", "D", "E"];
const object = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
};

class Addition {
  constructor(A = 0, B = 0) {
    this.A = A;
    this.B = B;
  }
  calculate() {
    return (
      <p>
        {this.A} + {this.B} = {this.A + this.B}
      </p>
    );
  }
}
const addition = new Addition(10, 20);

export default Module; // Default Export
export { number, string, array, object, addition }; // Named Exports
