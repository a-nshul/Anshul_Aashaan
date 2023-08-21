import { loginConstant } from "../../Component/Constant/loginConstant";
import InputField from "../../Component/Reusable/Form/Input";
import Button from "../../Component/Reusable/Form/Button";
import LogoImage from "../../static/image/logoImage";
function Login() {
  return (
    <div className={"publicBody"}>
      <div class="container">
        <div class="row loginForm">
          <div class="col-sm-4"></div>
          <div class="col-sm-4">
            <div align={"center"}>
              <div>
                <LogoImage />
              </div>
              <div>
                <h3 className="aasan-head">{loginConstant.HEADING}</h3>
              </div>
              <br />
              <h1>{loginConstant.SUB_HEADING}</h1>
            </div>
            <br />
            <div className="formContainer">
              <div>
                <InputField
                  type={loginConstant.FORM.USERNAME.TYPE}
                  name={loginConstant.FORM.USERNAME.NAME}
                  placeholder={loginConstant.FORM.USERNAME.PLACEHOLDER}
                  label={loginConstant.FORM.USERNAME.LABEL}
                />
                <InputField
                  type={loginConstant.FORM.PASSWORD.TYPE}
                  name={loginConstant.FORM.PASSWORD.NAME}
                  placeholder={loginConstant.FORM.PASSWORD.PLACEHOLDER}
                  label={loginConstant.FORM.PASSWORD.LABEL}
                />
                <div className="d-grid input-group-lg gap-2">
                  <Button
                    type={loginConstant.FORM.BUTTON.TYPE}
                    name={loginConstant.FORM.BUTTON.NAME}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
