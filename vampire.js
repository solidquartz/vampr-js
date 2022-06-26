class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let degreeOfSeparation = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      degreeOfSeparation++;
    }
    return degreeOfSeparation;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    const vampire1 = this.numberOfOffspring;
    const vampire2 = vampire.numberOfOffspring;

    if (vampire1 > vampire2) {
      return true;
    }
    return false;
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    let vampiresWithName = [];

    const depthFirstTraversal = () => {
      
      if (this.name === name) {
        vampiresWithName.push(this.name);

        for (const vampire of this.name) {
          vampire.depthFirstTraversal();
        }
      }
    }
  };

  // Returns the total number of vampires that exist
  get totalDescendents() {

  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {

  }



module.exports = Vampire;

