import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//STYLES
import {
  Button,
  Card,
  PageHeader,
  Spin,
  Steps, message
} from "antd";
import { projectActions } from "./ducks";
import { dummySteps } from "../../dummy";
import Audio from "./OutputTypes/Audio/Audio";
import Transcript from "./OutputTypes/Transcript/Transcript";
import PhoneticsFeatures from "./OutputTypes/FeatureExtraction/PhoneticsFeatures";
import ConfidenceSequence from "./OutputTypes/Sequence/ConfidenceSequence";


const { Step } = Steps;

class Process extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        current:0,
      currentCourseList: "",
      dataLoading: false,
      newTitle: "",
      newDescription: "",
      newLevel: "",
      steps:[
        {
          title: 'First',
          content: 'First-content',
        },
        {
          title: 'Second',
          content: 'Second-content',
        },
        {
          title: 'Last',
          content: 'Last-content',
        },
        {
          title: 'Last',
          content: 'Last-content',
        },
      ]
    };
  }


  handleSubmit = (values) => {
    const { productManagementActions } = this.props
    const projectDto = {
      jiraProjectName: values.jiraProjectName,
      projectCode: values.projectCode,
      projectName: values.projectName
    }
    console.log("Process ~ values", values)
    productManagementActions.Process({projectDto})
  };

  next = () => {
      this.setState({
          current: this.state.current+1
      })
  };

  prev = () => {
    this.setState({
        current: this.state.current-1
    })
  };

  render() {
    const { current, steps } = this.state
    console.log("Process ~ render ~ this.props", this.props)
    return (
      <div>
        <Card>
          <PageHeader className="site-page-header" title="Process" />

          <React.Fragment>
            <Steps current={current}>
              {dummySteps.steps.map(step => (
                <Step key={step.step} title={step.step} />
              ))}
            </Steps>

            <div className="steps-action" style={{paddingBottom:10, paddingTop:10}}>
                {current < dummySteps.steps.length - 1 && (
                <Button type="primary" onClick={() => this.next()}>
                    Next
                </Button>
                )}
                {current === dummySteps.steps.length - 1 && (
                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                    Done
                </Button>
                )}
                {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                    Previous
                </Button>
                )}
            </div>
            {/* <div className="steps-content">{steps[current].content}</div> */}
            <div className="steps-content">
            {
              dummySteps.steps[current].type == "audio" ? 
                <Audio data ={dummySteps.steps[current].data}/>
                :
                dummySteps.steps[current].type == "transcrpt" ? 
                <Transcript data ={dummySteps.steps[current].data}/>
                :
                dummySteps.steps[current].type == "phoneticsFeatureExtraction" ? 
                <PhoneticsFeatures data ={dummySteps.steps[current].data}/>
                :
                dummySteps.steps[current].type == "confidenceSequence" ? 
                <ConfidenceSequence data ={dummySteps.steps[current].data}/>
                :
                  null
            }
            </div>
           
          </React.Fragment>
          
         </Card>
       </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
      allState: state
    };
  };
  
  function mapDispatchToProps(dispatch) {
    return {
      productManagementActions: bindActionCreators(projectActions,dispatch)
    };
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Process));
