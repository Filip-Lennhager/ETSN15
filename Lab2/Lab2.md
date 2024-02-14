# ETSN15 - Lab2 

## Preparation Tasks

**Quality Requirements**

* Capacity: The system shall support ___ simultaneous users. (open target)

* Usability: All health care staff should be able to easily use the admin tool without technical expertise and without in-depth explanation of the tool. (open metric)

* Security: Only authorized health care staff should be able to reach the admin page and only view their own patients.

**Release Planning**

X = Phystec AB
Y = Healthcare Workers

f1 = Users should be able to issue alerts regarding patients. 
f2 = Users should be able to create and edit the patients exercise programs. 
f3 = The dashboard should present an overview of all the patients in a logical way. 

| Stakeholder | Feature | Benefit |
|-------------|---------|---------|
| X           |  f1     |       2 |
| X           |  f2     |       4 |
| X           |  f3     |       4 |
| Y           |  f1     |       3 |
| Y           |  f2     |       5 |
| Y           |  f3     |       4 |

| Resource | Feature | Cost    |
|----------|---------|---------|
| Dev      |  f1     |      30 |
| Dev      |  f2     |      80 |
| Dev      |  f3     |      50 |
| Test     |  f1     |      10 |
| Test     |  f2     |      20 |
| Test     |  f3     |      10 |

## Task 1: Create Quality Requirements

* Create a model in the reqT tree including a `Section("quality")`.

* Add a quality requirements `Quality("someId1") has Spec("blabla")` relevant for your project with a specification using the *open target* style [Lau, Chapter 6]. What type of quality aspect are you specifying?

    * Capacity: The system shall support ___ simultaneous users. (open target)

* Add a quality requirements `Quality("someId2") has Spec("blabla")` relevant for your project with a specification using the *open metric* style [Lau, Chapter 6]. What type of quality aspect are you specifying?

    * Usability: All health care staff should be able to easily use the admin tool without technical expertise and without in-depth explanation of the tool. (open metric)

    * Security: Only authorized health care staff should be able to reach the admin page and only view their own patients.

* Select the Quper model from the `Templates -> Quper` menu and then transfer the model to the tree (Ctrl+Shift+R).

* Generate a Quper SVG image by `Export -> To Quper .svg`. Open the file from a web browser, e.g. Firefox. What is the direction of the scale used in the template example; is better quality to the left or to the right?

    * Better to the left

* Based on the template in the `Templates -> Quper`, create a Quper model relevant to your project with at least two different targets. Use fictitious estimates if necessary but aim to be realistic if possible. How can you use Quper in your project?

![image](Quper.svg)

* (Optional) Publish your Quper model on the web as described in Lab 1 Task 4.


## Task 2: Create a Release Plan

* Create a node in your tree called `Section("ReleasePlan1")` and select the node.

* Load into the editor the script from menu `Templates -> Release plan - simple` and study the code. What is maximized? Discuss how easy it would be for you to manually find an optimal release plan. How would you go about solving this constraint problem if you were using pen and paper?

Find the features which maximizes benefit for the capacity in release A. Benefit/Cost ratio should be maximized. 

* Run the script and store the result in your tree by choosing the menu `Tree -> Replace node with Scala model in editor` *Ctrl+Shift+R*

sortedSolution.pp
Model(
  Release("A") has (
    Feature("1") has (Benefit(0), Cost(0)), 
    Feature("2") has (Benefit(0), Cost(0)), 
    Feature("3") has (Benefit(3), Cost(110)), 
    Resource("dev") has (
      Feature("1") has Cost(0), 
      Feature("2") has Cost(0), 
      Feature("3") has Cost(40), 
      Cost(40)), 
    Resource("test") has (
      Feature("1") has Cost(0), 
      Feature("2") has Cost(0), 
      Feature("3") has Cost(70), 
      Cost(70)), 
    Benefit(3), 
    Cost(110), 
    Order(1)), 
  Release("B") has (
    Feature("1") has (Benefit(8), Cost(50)), 
    Feature("2") has (Benefit(4), Cost(80)), 
    Feature("3") has (Benefit(0), Cost(0)), 
    Resource("dev") has (
      Feature("1") has Cost(10), 
      Feature("2") has Cost(70), 
      Feature("3") has Cost(0), 
      Cost(80)), 
    Resource("test") has (
      Feature("1") has Cost(40), 
      Feature("2") has Cost(10), 
      Feature("3") has Cost(0), 
      Cost(50)), 
    Benefit(12), 
    Cost(130), 
    Order(2)), 
  Feature("1") has (
    Stakeholder("X") has Benefit(4), 
    Stakeholder("Y") has Benefit(4), 
    Benefit(8), 
    Order(2)), 
  Feature("2") has (
    Stakeholder("X") has Benefit(2), 
    Stakeholder("Y") has Benefit(2), 
    Benefit(4), 
    Order(2)), 
  Feature("3") has (
    Stakeholder("X") has Benefit(1), 
    Stakeholder("Y") has Benefit(2), 
    Benefit(3), 
    Order(1)), 
  Stakeholder("X") has (
    Feature("1") has Benefit(4), 
    Feature("2") has Benefit(2), 
    Feature("3") has Benefit(1), 
    Prio(1)), 
  Stakeholder("Y") has (
    Feature("1") has Benefit(2), 
    Feature("2") has Benefit(1), 
    Feature("3") has Benefit(1), 
    Prio(2)), 
  Resource("dev") has (
    Release("A") has Capacity(100), 
    Release("B") has Capacity(100), 
    Feature("1") has Cost(10), 
    Feature("2") has Cost(70), 
    Feature("3") has Cost(40)), 
  Resource("test") has (
    Release("A") has Capacity(100), 
    Release("B") has Capacity(100), 
    Feature("1") has Cost(40), 
    Feature("2") has Cost(10), 
    Feature("3") has Cost(70)))

* Study the solution. The features with zero cost in a certain release are de-allocated from that release. Which feature(s) are chosen by the constraint solver for the first release? Why?

Only feature 3 is chosen, because feature 3 preceeds feature 1 and has cost 110 which takes up the entire capacity.

* Change the capacity of the first release for dev and test and re-evaluate the script until the order of features in the solution is changed. If you want to try solutions directly in terminal you can choose `Editor -> Run Script => Console` *Ctrl+Enter* and then type `sortedSolution.pp` to pretty-print the solution in terminal. Experiment with different priorities of stakeholders.

* What does it mean in practice that the release planning problem is **NP-complete**? See e.g. [wikipedia Knapsack_problem](https://en.wikipedia.org/wiki/Knapsack_problem)

* Load into the editor the reqT script in menu `Templates -> Release plan - advanced` and study the code.

* Run the script and store the result in your tree by choosing the menu `Tree -> Replace node with Scala model in editor` *Ctrl+Shift+R*. Which features are allocated to the March Release?

autoCompletion
exportContextDiagram.svg
exportHtml
releasePlanning


Release("March") has (
    Feature("autoCompletion") has (Benefit(7), Cost(6)), 
    Feature("autoSave") has (Benefit(0), Cost(0)), 
    Feature("exportContexDiagramSvg") has (Benefit(6), Cost(7)), 
    Feature("exportGraphViz") has (Benefit(0), Cost(0)), 
    Feature("exportHtml") has (Benefit(10), Cost(11)), 
    Feature("exportLatex") has (Benefit(0), Cost(0)), 
    Feature("exportTabular") has (Benefit(0), Cost(0)), 
    Feature("releasePlanning") has (Benefit(4), Cost(9)), 
    Feature("syntaxColoring") has (Benefit(0), Cost(0)), 
    Resource("TeamA") has (
      Feature("autoCompletion") has Cost(3), 
      Feature("autoSave") has Cost(0), 
      Feature("exportContexDiagramSvg") has Cost(3), 
      Feature("exportGraphViz") has Cost(0), 
      Feature("exportHtml") has Cost(9), 
      Feature("exportLatex") has Cost(0), 
      Feature("exportTabular") has Cost(0), 
      Feature("releasePlanning") has Cost(4), 
      Feature("syntaxColoring") has Cost(0), 
      Cost(19)), 

* Add a constraint `Feature("exportHtml") precedes Feature("exportGraphViz")` by by removing the comment markers `/*` and `*/` from the Scala code. How does this constraint affect the solution found.

Release("March") has (
    Feature("autoCompletion") has (Benefit(7), Cost(6)), 
    Feature("autoSave") has (Benefit(0), Cost(0)), 
    Feature("exportContexDiagramSvg") has (Benefit(6), Cost(7)), 
    Feature("exportGraphViz") has (Benefit(0), Cost(0)), 
    Feature("exportHtml") has (Benefit(10), Cost(11)), 
    Feature("exportLatex") has (Benefit(0), Cost(0)), 
    Feature("exportTabular") has (Benefit(0), Cost(0)), 
    Feature("releasePlanning") has (Benefit(4), Cost(9)), 
    Feature("syntaxColoring") has (Benefit(0), Cost(0)), 
    Resource("TeamA") has (
      Feature("autoCompletion") has Cost(3), 
      Feature("autoSave") has Cost(0), 
      Feature("exportContexDiagramSvg") has Cost(3), 
      Feature("exportGraphViz") has Cost(0), 
      Feature("exportHtml") has Cost(9), 
      Feature("exportLatex") has Cost(0), 
      Feature("exportTabular") has Cost(0), 
      Feature("releasePlanning") has Cost(4), 
      Feature("syntaxColoring") has Cost(0), 
      Cost(19)), 
    Resource("TeamB") has (
      Feature("autoCompletion") has Cost(3), 
      Feature("autoSave") has Cost(0), 
      Feature("exportContexDiagramSvg") has Cost(4), 
      Feature("exportGraphViz") has Cost(0), 
      Feature("exportHtml") has Cost(2), 
      Feature("exportLatex") has Cost(0), 
      Feature("exportTabular") has Cost(0), 
      Feature("releasePlanning") has Cost(5), 
      Feature("syntaxColoring") has Cost(0), 
      Cost(14)), 
    Benefit(27), 
    Cost(33), 
    Order(1)), 

* Add `Stakeholder("Ben")` by removing the comment markers `/*` and `*/` from the Scala code. Choose `Editor -> Run Script => Console` *Ctrl+Enter* and then type `solution.pp` to pretty-print the solution in terminal. Experiment with different capacities of `Release("later")`. How low capacity can you allocate and still finding a solution? **14**

Release("March") has (
    Feature("autoCompletion") has (Benefit(17), Cost(6)), 
    Feature("autoSave") has (Benefit(0), Cost(0)), 
    Feature("exportContexDiagramSvg") has (Benefit(13), Cost(7)), 
    Feature("exportGraphViz") has (Benefit(0), Cost(0)), 
    Feature("exportHtml") has (Benefit(0), Cost(0)), 
    Feature("exportLatex") has (Benefit(11), Cost(10)), 
    Feature("exportTabular") has (Benefit(0), Cost(0)), 
    Feature("releasePlanning") has (Benefit(0), Cost(0)), 
    Feature("syntaxColoring") has (Benefit(11), Cost(8)), 
    Resource("TeamA") has (
      Feature("autoCompletion") has Cost(3), 
      Feature("autoSave") has Cost(0), 
      Feature("exportContexDiagramSvg") has Cost(3), 
      Feature("exportGraphViz") has Cost(0), 
      Feature("exportHtml") has Cost(0), 
      Feature("exportLatex") has Cost(6), 
      Feature("exportTabular") has Cost(0), 
      Feature("releasePlanning") has Cost(0), 
      Feature("syntaxColoring") has Cost(6), 
      Cost(18)), 
    Resource("TeamB") has (
      Feature("autoCompletion") has Cost(3), 
      Feature("autoSave") has Cost(0), 
      Feature("exportContexDiagramSvg") has Cost(4), 
      Feature("exportGraphViz") has Cost(0), 
      Feature("exportHtml") has Cost(0), 
      Feature("exportLatex") has Cost(4), 
      Feature("exportTabular") has Cost(0), 
      Feature("releasePlanning") has Cost(0), 
      Feature("syntaxColoring") has Cost(2), 
      Cost(13)), 
    Benefit(52), 
    Cost(31), 
    Order(1)),

* Find a solution that minimize the cost of the March release by replacing the optimization method with `minimize(Release("March")/Cost)` and compare with the previous solution.

max:


solution.pp
Model(
  Release("July") has (
    Feature("autoCompletion") has (Benefit(0), Cost(0)), 
    Feature("autoSave") has (Benefit(0), Cost(0)), 
    Feature("exportContexDiagramSvg") has (Benefit(13), Cost(7)), 
    Feature("exportGraphViz") has (Benefit(0), Cost(0)), 
    Feature("exportHtml") has (Benefit(11), Cost(11)), 
    Feature("exportLatex") has (Benefit(0), Cost(0)), 
    Feature("exportTabular") has (Benefit(13), Cost(12)), 
    Feature("releasePlanning") has (Benefit(0), Cost(0)), 
    Feature("syntaxColoring") has (Benefit(0), Cost(0)), 
    Resource("TeamA") has (
      Feature("autoCompletion") has Cost(0), 
      Feature("autoSave") has Cost(0), 
      Feature("exportContexDiagramSvg") has Cost(3), 
      Feature("exportGraphViz") has Cost(0), 
      Feature("exportHtml") has Cost(9), 
      Feature("exportLatex") has Cost(0), 
      Feature("exportTabular") has Cost(3), 
      Feature("releasePlanning") has Cost(0), 
      Feature("syntaxColoring") has Cost(0), 
      Cost(15)), 
    Resource("TeamB") has (
      Feature("autoCompletion") has Cost(0), 
      Feature("autoSave") has Cost(0), 
      Feature("exportContexDiagramSvg") has Cost(4), 
      Feature("exportGraphViz") has Cost(0), 
      Feature("exportHtml") has Cost(2), 
      Feature("exportLatex") has Cost(0), 
      Feature("exportTabular") has Cost(9), 
      Feature("releasePlanning") has Cost(0), 
      Feature("syntaxColoring") has Cost(0), 
      Cost(15)), 
    Benefit(37), 
    Cost(30), 
    Order(2)), 
  Release("March") has (
    Feature("autoCompletion") has (Benefit(17), Cost(6)), 
    Feature("autoSave") has (Benefit(13), Cost(13)), 
    Feature("exportContexDiagramSvg") has (Benefit(0), Cost(0)), 
    Feature("exportGraphViz") has (Benefit(0), Cost(0)), 
    Feature("exportHtml") has (Benefit(0), Cost(0)), 
    Feature("exportLatex") has (Benefit(0), Cost(0)), 
    Feature("exportTabular") has (Benefit(0), Cost(0)), 
    Feature("releasePlanning") has (Benefit(9), Cost(9)), 
    Feature("syntaxColoring") has (Benefit(0), Cost(0)), 
    Resource("TeamA") has (
      Feature("autoCompletion") has Cost(3), 
      Feature("autoSave") has Cost(6), 
      Feature("exportContexDiagramSvg") has Cost(0), 
      Feature("exportGraphViz") has Cost(0), 
      Feature("exportHtml") has Cost(0), 
      Feature("exportLatex") has Cost(0), 
      Feature("exportTabular") has Cost(0), 
      Feature("releasePlanning") has Cost(4), 
      Feature("syntaxColoring") has Cost(0), 
      Cost(13)), 
    Resource("TeamB") has (
      Feature("autoCompletion") has Cost(3), 
      Feature("autoSave") has Cost(7), 
      Feature("exportContexDiagramSvg") has Cost(0), 
      Feature("exportGraphViz") has Cost(0), 
      Feature("exportHtml") has Cost(0), 
      Feature("exportLatex") has Cost(0), 
      Feature("exportTabular") has Cost(0), 
      Feature("releasePlanning") has Cost(5), 
      Feature("syntaxColoring") has Cost(0), 
      Cost(15)), 
    Benefit(39), 
    Cost(28), 
    Order(1)), 
  Release("later") has (
    Feature("autoCompletion") has (Benefit(0), Cost(0)), 
    Feature("autoSave") has (Benefit(0), Cost(0)), 
    Feature("exportContexDiagramSvg") has (Benefit(0), Cost(0)), 
    Feature("exportGraphViz") has (Benefit(19), Cost(15)), 
    Feature("exportHtml") has (Benefit(0), Cost(0)), 
    Feature("exportLatex") has (Benefit(11), Cost(10)), 
    Feature("exportTabular") has (Benefit(0), Cost(0)), 
    Feature("releasePlanning") has (Benefit(0), Cost(0)), 
    Feature("syntaxColoring") has (Benefit(11), Cost(8)), 
    Resource("TeamA") has (
      Feature("autoCompletion") has Cost(0), 
      Feature("autoSave") has Cost(0), 
      Feature("exportContexDiagramSvg") has Cost(0), 
      Feature("exportGraphViz") has Cost(7), 
      Feature("exportHtml") has Cost(0), 
      Feature("exportLatex") has Cost(6), 
      Feature("exportTabular") has Cost(0), 
      Feature("releasePlanning") has Cost(0), 
      Feature("syntaxColoring") has Cost(6), 
      Cost(19)), 
    Resource("TeamB") has (
      Feature("autoCompletion") has Cost(0), 
      Feature("autoSave") has Cost(0), 
      Feature("exportContexDiagramSvg") has Cost(0), 
      Feature("exportGraphViz") has Cost(8), 
      Feature("exportHtml") has Cost(0), 
      Feature("exportLatex") has Cost(4), 
      Feature("exportTabular") has Cost(0), 
      Feature("releasePlanning") has Cost(0), 
      Feature("syntaxColoring") has Cost(2), 
      Cost(14)), 
    Benefit(41), 
    Cost(33), 
    Order(3)), 
  Feature("autoCompletion") has (
    Stakeholder("Ada") has Benefit(7), 
    Stakeholder("Ben") has Benefit(10), 
    Benefit(17), 
    Order(1)), 
  Feature("autoSave") has (
    Stakeholder("Ada") has Benefit(9), 
    Stakeholder("Ben") has Benefit(4), 
    Benefit(13), 
    Order(1)), 
  Feature("exportContexDiagramSvg") has (
    Stakeholder("Ada") has Benefit(6), 
    Stakeholder("Ben") has Benefit(7), 
    Benefit(13), 
    Order(2)), 
  Feature("exportGraphViz") has (
    Stakeholder("Ada") has Benefit(10), 
    Stakeholder("Ben") has Benefit(9), 
    Benefit(19), 
    Order(3)), 
  Feature("exportHtml") has (
    Stakeholder("Ada") has Benefit(10), 
    Stakeholder("Ben") has Benefit(1), 
    Benefit(11), 
    Order(2)), 
  Feature("exportLatex") has (
    Stakeholder("Ada") has Benefit(7), 
    Stakeholder("Ben") has Benefit(4), 
    Benefit(11), 
    Order(3)), 
  Feature("exportTabular") has (
    Stakeholder("Ada") has Benefit(10), 
    Stakeholder("Ben") has Benefit(3), 
    Benefit(13), 
    Order(2)), 
  Feature("releasePlanning") has (
    Stakeholder("Ada") has Benefit(4), 
    Stakeholder("Ben") has Benefit(5), 
    Benefit(9), 
    Order(1)), 
  Feature("syntaxColoring") has (
    Stakeholder("Ada") has Benefit(3), 
    Stakeholder("Ben") has Benefit(8), 
    Benefit(11), 
    Order(3)), 
  Stakeholder("Ada") has (
    Feature("autoCompletion") has Benefit(7), 
    Feature("autoSave") has Benefit(9), 
    Feature("exportContexDiagramSvg") has Benefit(6), 
    Feature("exportGraphViz") has Benefit(10), 
    Feature("exportHtml") has Benefit(10), 
    Feature("exportLatex") has Benefit(7), 
    Feature("exportTabular") has Benefit(10), 
    Feature("releasePlanning") has Benefit(4), 
    Feature("syntaxColoring") has Benefit(3), 
    Prio(1)), 
  Stakeholder("Ben") has (
    Feature("autoCompletion") has Benefit(10), 
    Feature("autoSave") has Benefit(4), 
    Feature("exportContexDiagramSvg") has Benefit(7), 
    Feature("exportGraphViz") has Benefit(9), 
    Feature("exportHtml") has Benefit(1), 
    Feature("exportLatex") has Benefit(4), 
    Feature("exportTabular") has Benefit(3), 
    Feature("releasePlanning") has Benefit(5), 
    Feature("syntaxColoring") has Benefit(8), 
    Prio(1)), 
  Resource("TeamA") has (
    Release("July") has Capacity(15), 
    Release("March") has Capacity(20), 
    Release("later") has Capacity(1000), 
    Feature("autoCompletion") has Cost(3), 
    Feature("autoSave") has Cost(6), 
    Feature("exportContexDiagramSvg") has Cost(3), 
    Feature("exportGraphViz") has Cost(7), 
    Feature("exportHtml") has Cost(9), 
    Feature("exportLatex") has Cost(6), 
    Feature("exportTabular") has Cost(3), 
    Feature("releasePlanning") has Cost(4), 
    Feature("syntaxColoring") has Cost(6)), 
  Resource("TeamB") has (
    Release("July") has Capacity(15), 
    Release("March") has Capacity(15), 
    Release("later") has Capacity(14), 
    Feature("autoCompletion") has Cost(3), 
    Feature("autoSave") has Cost(7), 
    Feature("exportContexDiagramSvg") has Cost(4), 
    Feature("exportGraphViz") has Cost(8), 
    Feature("exportHtml") has Cost(2), 
    Feature("exportLatex") has Cost(4), 
    Feature("exportTabular") has Cost(9), 
    Feature("releasePlanning") has Cost(5), 
    Feature("syntaxColoring") has Cost(2)))

Mimimize

solution.pp
Model(
  Release("July") has (
    Feature("autoCompletion") has (Benefit(17), Cost(6)), 
    Feature("autoSave") has (Benefit(13), Cost(13)), 
    Feature("exportContexDiagramSvg") has (Benefit(0), Cost(0)), 
    Feature("exportGraphViz") has (Benefit(0), Cost(0)), 
    Feature("exportHtml") has (Benefit(0), Cost(0)), 
    Feature("exportLatex") has (Benefit(0), Cost(0)), 
    Feature("exportTabular") has (Benefit(0), Cost(0)), 
    Feature("releasePlanning") has (Benefit(9), Cost(9)), 
    Feature("syntaxColoring") has (Benefit(0), Cost(0)), 
    Resource("TeamA") has (
      Feature("autoCompletion") has Cost(3), 
      Feature("autoSave") has Cost(6), 
      Feature("exportContexDiagramSvg") has Cost(0), 
      Feature("exportGraphViz") has Cost(0), 
      Feature("exportHtml") has Cost(0), 
      Feature("exportLatex") has Cost(0), 
      Feature("exportTabular") has Cost(0), 
      Feature("releasePlanning") has Cost(4), 
      Feature("syntaxColoring") has Cost(0), 
      Cost(13)), 
    Resource("TeamB") has (
      Feature("autoCompletion") has Cost(3), 
      Feature("autoSave") has Cost(7), 
      Feature("exportContexDiagramSvg") has Cost(0), 
      Feature("exportGraphViz") has Cost(0), 
      Feature("exportHtml") has Cost(0), 
      Feature("exportLatex") has Cost(0), 
      Feature("exportTabular") has Cost(0), 
      Feature("releasePlanning") has Cost(5), 
      Feature("syntaxColoring") has Cost(0), 
      Cost(15)), 
    Benefit(39), 
    Cost(28), 
    Order(2)), 
  Release("March") has (
    Feature("autoCompletion") has (Benefit(0), Cost(0)), 
    Feature("autoSave") has (Benefit(0), Cost(0)), 
    Feature("exportContexDiagramSvg") has (Benefit(0), Cost(0)), 
    Feature("exportGraphViz") has (Benefit(0), Cost(0)), 
    Feature("exportHtml") has (Benefit(11), Cost(11)), 
    Feature("exportLatex") has (Benefit(11), Cost(10)), 
    Feature("exportTabular") has (Benefit(13), Cost(12)), 
    Feature("releasePlanning") has (Benefit(0), Cost(0)), 
    Feature("syntaxColoring") has (Benefit(0), Cost(0)), 
    Resource("TeamA") has (
      Feature("autoCompletion") has Cost(0), 
      Feature("autoSave") has Cost(0), 
      Feature("exportContexDiagramSvg") has Cost(0), 
      Feature("exportGraphViz") has Cost(0), 
      Feature("exportHtml") has Cost(9), 
      Feature("exportLatex") has Cost(6), 
      Feature("exportTabular") has Cost(3), 
      Feature("releasePlanning") has Cost(0), 
      Feature("syntaxColoring") has Cost(0), 
      Cost(18)), 
    Resource("TeamB") has (
      Feature("autoCompletion") has Cost(0), 
      Feature("autoSave") has Cost(0), 
      Feature("exportContexDiagramSvg") has Cost(0), 
      Feature("exportGraphViz") has Cost(0), 
      Feature("exportHtml") has Cost(2), 
      Feature("exportLatex") has Cost(4), 
      Feature("exportTabular") has Cost(9), 
      Feature("releasePlanning") has Cost(0), 
      Feature("syntaxColoring") has Cost(0), 
      Cost(15)), 
    Benefit(35), 
    Cost(33), 
    Order(1)), 
  Release("later") has (
    Feature("autoCompletion") has (Benefit(0), Cost(0)), 
    Feature("autoSave") has (Benefit(0), Cost(0)), 
    Feature("exportContexDiagramSvg") has (Benefit(13), Cost(7)), 
    Feature("exportGraphViz") has (Benefit(19), Cost(15)), 
    Feature("exportHtml") has (Benefit(0), Cost(0)), 
    Feature("exportLatex") has (Benefit(0), Cost(0)), 
    Feature("exportTabular") has (Benefit(0), Cost(0)), 
    Feature("releasePlanning") has (Benefit(0), Cost(0)), 
    Feature("syntaxColoring") has (Benefit(11), Cost(8)), 
    Resource("TeamA") has (
      Feature("autoCompletion") has Cost(0), 
      Feature("autoSave") has Cost(0), 
      Feature("exportContexDiagramSvg") has Cost(3), 
      Feature("exportGraphViz") has Cost(7), 
      Feature("exportHtml") has Cost(0), 
      Feature("exportLatex") has Cost(0), 
      Feature("exportTabular") has Cost(0), 
      Feature("releasePlanning") has Cost(0), 
      Feature("syntaxColoring") has Cost(6), 
      Cost(16)), 
    Resource("TeamB") has (
      Feature("autoCompletion") has Cost(0), 
      Feature("autoSave") has Cost(0), 
      Feature("exportContexDiagramSvg") has Cost(4), 
      Feature("exportGraphViz") has Cost(8), 
      Feature("exportHtml") has Cost(0), 
      Feature("exportLatex") has Cost(0), 
      Feature("exportTabular") has Cost(0), 
      Feature("releasePlanning") has Cost(0), 
      Feature("syntaxColoring") has Cost(2), 
      Cost(14)), 
    Benefit(43), 
    Cost(30), 
    Order(3)), 
  Feature("autoCompletion") has (
    Stakeholder("Ada") has Benefit(7), 
    Stakeholder("Ben") has Benefit(10), 
    Benefit(17), 
    Order(2)), 
  Feature("autoSave") has (
    Stakeholder("Ada") has Benefit(9), 
    Stakeholder("Ben") has Benefit(4), 
    Benefit(13), 
    Order(2)), 
  Feature("exportContexDiagramSvg") has (
    Stakeholder("Ada") has Benefit(6), 
    Stakeholder("Ben") has Benefit(7), 
    Benefit(13), 
    Order(3)), 
  Feature("exportGraphViz") has (
    Stakeholder("Ada") has Benefit(10), 
    Stakeholder("Ben") has Benefit(9), 
    Benefit(19), 
    Order(3)), 
  Feature("exportHtml") has (
    Stakeholder("Ada") has Benefit(10), 
    Stakeholder("Ben") has Benefit(1), 
    Benefit(11), 
    Order(1)), 
  Feature("exportLatex") has (
    Stakeholder("Ada") has Benefit(7), 
    Stakeholder("Ben") has Benefit(4), 
    Benefit(11), 
    Order(1)), 
  Feature("exportTabular") has (
    Stakeholder("Ada") has Benefit(10), 
    Stakeholder("Ben") has Benefit(3), 
    Benefit(13), 
    Order(1)), 
  Feature("releasePlanning") has (
    Stakeholder("Ada") has Benefit(4), 
    Stakeholder("Ben") has Benefit(5), 
    Benefit(9), 
    Order(2)), 
  Feature("syntaxColoring") has (
    Stakeholder("Ada") has Benefit(3), 
    Stakeholder("Ben") has Benefit(8), 
    Benefit(11), 
    Order(3)), 
  Stakeholder("Ada") has (
    Feature("autoCompletion") has Benefit(7), 
    Feature("autoSave") has Benefit(9), 
    Feature("exportContexDiagramSvg") has Benefit(6), 
    Feature("exportGraphViz") has Benefit(10), 
    Feature("exportHtml") has Benefit(10), 
    Feature("exportLatex") has Benefit(7), 
    Feature("exportTabular") has Benefit(10), 
    Feature("releasePlanning") has Benefit(4), 
    Feature("syntaxColoring") has Benefit(3), 
    Prio(1)), 
  Stakeholder("Ben") has (
    Feature("autoCompletion") has Benefit(10), 
    Feature("autoSave") has Benefit(4), 
    Feature("exportContexDiagramSvg") has Benefit(7), 
    Feature("exportGraphViz") has Benefit(9), 
    Feature("exportHtml") has Benefit(1), 
    Feature("exportLatex") has Benefit(4), 
    Feature("exportTabular") has Benefit(3), 
    Feature("releasePlanning") has Benefit(5), 
    Feature("syntaxColoring") has Benefit(8), 
    Prio(1)), 
  Resource("TeamA") has (
    Release("July") has Capacity(15), 
    Release("March") has Capacity(20), 
    Release("later") has Capacity(1000), 
    Feature("autoCompletion") has Cost(3), 
    Feature("autoSave") has Cost(6), 
    Feature("exportContexDiagramSvg") has Cost(3), 
    Feature("exportGraphViz") has Cost(7), 
    Feature("exportHtml") has Cost(9), 
    Feature("exportLatex") has Cost(6), 
    Feature("exportTabular") has Cost(3), 
    Feature("releasePlanning") has Cost(4), 
    Feature("syntaxColoring") has Cost(6)), 
  Resource("TeamB") has (
    Release("July") has Capacity(15), 
    Release("March") has Capacity(15), 
    Release("later") has Capacity(14), 
    Feature("autoCompletion") has Cost(3), 
    Feature("autoSave") has Cost(7), 
    Feature("exportContexDiagramSvg") has Cost(4), 
    Feature("exportGraphViz") has Cost(8), 
    Feature("exportHtml") has Cost(2), 
    Feature("exportLatex") has Cost(4), 
    Feature("exportTabular") has Cost(9), 
    Feature("releasePlanning") has Cost(5), 
    Feature("syntaxColoring") has Cost(2)))



* Create a release plan for at least three features, two stakeholders and two releases for your project.
r1 prec r2

sortedSolution.pp
Model(
  Release("A") has (
    Feature("1") has (Benefit(0), Cost(0)), 
    Feature("2") has (Benefit(14), Cost(100)), 
    Feature("3") has (Benefit(12), Cost(60)), 
    Resource("dev") has (
      Feature("1") has Cost(0), 
      Feature("2") has Cost(80), 
      Feature("3") has Cost(50), 
      Cost(130)), 
    Resource("test") has (
      Feature("1") has Cost(0), 
      Feature("2") has Cost(20), 
      Feature("3") has Cost(10), 
      Cost(30)), 
    Benefit(26), 
    Cost(160), 
    Order(1)), 
  Release("B") has (
    Feature("1") has (Benefit(8), Cost(40)), 
    Feature("2") has (Benefit(0), Cost(0)), 
    Feature("3") has (Benefit(0), Cost(0)), 
    Resource("dev") has (
      Feature("1") has Cost(30), 
      Feature("2") has Cost(0), 
      Feature("3") has Cost(0), 
      Cost(30)), 
    Resource("test") has (
      Feature("1") has Cost(10), 
      Feature("2") has Cost(0), 
      Feature("3") has Cost(0), 
      Cost(10)), 
    Benefit(8), 
    Cost(40), 
    Order(2)), 
  Feature("1") has (
    Stakeholder("X") has Benefit(2), 
    Stakeholder("Y") has Benefit(6), 
    Benefit(8), 
    Order(2)), 
  Feature("2") has (
    Stakeholder("X") has Benefit(4), 
    Stakeholder("Y") has Benefit(10), 
    Benefit(14), 
    Order(1)), 
  Feature("3") has (
    Stakeholder("X") has Benefit(4), 
    Stakeholder("Y") has Benefit(8), 
    Benefit(12), 
    Order(1)), 
  Stakeholder("X") has (
    Feature("1") has Benefit(2), 
    Feature("2") has Benefit(4), 
    Feature("3") has Benefit(4), 
    Prio(1)), 
  Stakeholder("Y") has (
    Feature("1") has Benefit(3), 
    Feature("2") has Benefit(5), 
    Feature("3") has Benefit(4), 
    Prio(2)), 
  Resource("dev") has (
    Release("A") has Capacity(200), 
    Release("B") has Capacity(200), 
    Feature("1") has Cost(30), 
    Feature("2") has Cost(80), 
    Feature("3") has Cost(50)), 
  Resource("test") has (
    Release("A") has Capacity(200), 
    Release("B") has Capacity(200), 
    Feature("1") has Cost(10), 
    Feature("2") has Cost(20), 
    Feature("3") has Cost(10)))

* Add constraints using one or more `precedes`, `excludes`, `requires` and investigate how the constraints impact the solution if found.
r2 prec r3

sortedSolution.pp
Model(
  Release("A") has (
    Feature("1") has (Benefit(0), Cost(0)), 
    Feature("2") has (Benefit(14), Cost(100)), 
    Feature("3") has (Benefit(12), Cost(60)), 
    Resource("dev") has (
      Feature("1") has Cost(0), 
      Feature("2") has Cost(80), 
      Feature("3") has Cost(50), 
      Cost(130)), 
    Resource("test") has (
      Feature("1") has Cost(0), 
      Feature("2") has Cost(20), 
      Feature("3") has Cost(10), 
      Cost(30)), 
    Benefit(26), 
    Cost(160), 
    Order(1)), 
  Release("B") has (
    Feature("1") has (Benefit(8), Cost(40)), 
    Feature("2") has (Benefit(0), Cost(0)), 
    Feature("3") has (Benefit(0), Cost(0)), 
    Resource("dev") has (
      Feature("1") has Cost(30), 
      Feature("2") has Cost(0), 
      Feature("3") has Cost(0), 
      Cost(30)), 
    Resource("test") has (
      Feature("1") has Cost(10), 
      Feature("2") has Cost(0), 
      Feature("3") has Cost(0), 
      Cost(10)), 
    Benefit(8), 
    Cost(40), 
    Order(2)), 
  Feature("1") has (
    Stakeholder("X") has Benefit(2), 
    Stakeholder("Y") has Benefit(6), 
    Benefit(8), 
    Order(2)), 
  Feature("2") has (
    Stakeholder("X") has Benefit(4), 
    Stakeholder("Y") has Benefit(10), 
    Benefit(14), 
    Order(1)), 
  Feature("3") has (
    Stakeholder("X") has Benefit(4), 
    Stakeholder("Y") has Benefit(8), 
    Benefit(12), 
    Order(1)), 
  Stakeholder("X") has (
    Feature("1") has Benefit(2), 
    Feature("2") has Benefit(4), 
    Feature("3") has Benefit(4), 
    Prio(1)), 
  Stakeholder("Y") has (
    Feature("1") has Benefit(3), 
    Feature("2") has Benefit(5), 
    Feature("3") has Benefit(4), 
    Prio(2)), 
  Resource("dev") has (
    Release("A") has Capacity(200), 
    Release("B") has Capacity(200), 
    Feature("1") has Cost(30), 
    Feature("2") has Cost(80), 
    Feature("3") has Cost(50)), 
  Resource("test") has (
    Release("A") has Capacity(200), 
    Release("B") has Capacity(200), 
    Feature("1") has Cost(10), 
    Feature("2") has Cost(20), 
    Feature("3") has Cost(10)))

* Discuss how you will work with release planning in your project.