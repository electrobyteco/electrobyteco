import styled from "styled-components";
import { Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Slider from "react-input-slider";
import Section from "../../components/section";
import contentful from "../../services/contentful";
import swal from "sweetalert";

const FormLabel = styled.label`
  display: block;
  width: 35%;
  font-size: 24px;
  font-weight: bold;
`;

const FormGroup = styled.div`
  display: flex;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const Input = styled.input`
  margin-top: 10px;
  display: block;
  line-height: 40px;
  border-radius: 5px;
  background: #281d53;
  width: 100%;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  font-family: "Gilroy";
  font-size: 18px;
`;

const Textarea = styled.textarea`
  margin-top: 10px;
  display: block;
  min-height: 100px;
  border-radius: 5px;
  background: #281d53;
  width: 100%;
  color: white;
  padding: 10px;
  font-family: "Gilroy";
  font-size: 18px;
  resize: vertical;
`;

const InputImitator = styled.div`
  width: 100%;
  display: flex;
`;

const FieldError = styled.div`
  width: 100%;
  margin-top: 10px;
  color: #fe003d;
`;

const Button = styled.button`
  background: #5731f4;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  padding: 10px 30px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #6844ff;
  }
`;

const Form = styled.form`
  display: block;
  width: 50%;
  margin: 0 auto;
  @media (max-width: 1280px) {
    width: 90%;
  }
`;

const Budget = styled.div`
  font-weight: bold;
  margin-top: 12px;
  margin-left: 20px;
`;

function Work() {
  async function createProductQuery(fields) {
    try {
      const space = await contentful.getSpace("17ixjyhbsigl");
      const environment = await space.getEnvironment("master");
      const entry = await environment.createEntry("projectQuery", { fields });
      await entry.publish();
      swal(
        "Yoohoo!",
        "Your message was recieved by us. We will reply very soon!",
        "success"
      );
    } catch (e) {
      console.error(e);
    }
  }
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    project: "",
    budget: 500,
    description: "",
  };

  const validationSchema = yup.object({
    name: yup.string().min(1).max(100).required().label("Name"),
    email: yup.string().min(1).max(100).email().required().label("Email"),
    phone: yup.string().min(1).max(100).required().label("Phone"),
    project: yup.string().min(1).max(100).required().label("Project"),
    budget: yup.number().required().label("Bugdet"),
    description: yup.string().min(20).max(500).required().label("Description"),
  });

  async function sendMessage(values, { resetForm }) {
    createProductQuery({
      name: { "en-US": values.name },
      email: { "en-US": values.email },
      phoneNumber: { "en-US": values.phone },
      project: { "en-US": values.project },
      budget: { "en-US": values.budget },
      description: { "en-US": values.description },
    });
    resetForm();
  }

  return (
    <Section id="work">
      <Section.Heading>Work with us</Section.Heading>
      <Section.Body>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={sendMessage}
        >
          {({ values, setFieldValue, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel>Your Name</FormLabel>
                <Field name="name" type="text" as={Input} />
                <ErrorMessage name="name" component={FieldError} />
              </FormGroup>
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <Field name="email" type="text" as={Input} />
                <ErrorMessage name="email" component={FieldError} />
              </FormGroup>
              <FormGroup>
                <FormLabel>Phone</FormLabel>
                <Field name="phone" type="text" as={Input} />
                <ErrorMessage name="phone" component={FieldError} />
              </FormGroup>
              <FormGroup>
                <FormLabel>Project</FormLabel>
                <Field name="project" type="text" as={Input} />
                <ErrorMessage name="project" component={FieldError} />
              </FormGroup>
              <FormGroup>
                <FormLabel>Bugdet</FormLabel>
                <InputImitator>
                  <Slider
                    xmin={500}
                    xmax={50000}
                    styles={{
                      track: {
                        backgroundColor: "#281D53",
                        width: "100%",
                        marginTop: "20px",
                      },
                      active: {
                        backgroundColor: "#533BB6",
                      },
                      thumb: {
                        width: 16,
                        height: 16,
                        boxShadow: "1px 1px 4px 2px rgba(0,0,0,0.25)",
                        backgroundColor: "#533BB6",
                      },
                      disabled: {
                        opacity: 0.5,
                      },
                    }}
                    axis="x"
                    x={values.budget}
                    onChange={(updates) => setFieldValue("budget", updates.x)}
                  />
                  <Budget>
                    {values.budget ? `$${values.budget}` : "Budget"}
                  </Budget>
                </InputImitator>
                <ErrorMessage name="bugdet" component={FieldError} />
              </FormGroup>
              <FormGroup>
                <FormLabel>Description</FormLabel>
                <Field name="description" type="text" as={Textarea} rows="2" />
                <ErrorMessage name="description" component={FieldError} />
              </FormGroup>
              <FormGroup>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending" : "Send Message"}
                </Button>
              </FormGroup>
            </Form>
          )}
        </Formik>
      </Section.Body>
    </Section>
  );
}

export default Work;
