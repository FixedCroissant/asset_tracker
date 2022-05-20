//Call API from our component
import MyComponent from "../components/mycomponent";
import Form from "../components/Form";
import FormInput from "../components/FormInput";

export default function CityPage() {
  return (
    <div>
      <Form
        formInitialValues={{
          firstName: "",
          lastName: "",
          emaiLAddress: "",
          password: "",
        }}
      >
        <FormInput label="First Name" name="firstName" />
        <FormInput label="Last Name" name="lastName" />
        <FormInput label="email" type="email" name="emailAddress" />
        <FormInput label="Password" type="password" name="password" />
      </Form>
    </div>
  );
}
