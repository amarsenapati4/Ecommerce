import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from 'react-hot-toast';
import axios from "axios";
import { useAuth } from "../../Context/auth";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import './login.css';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth,setAuth]=useAuth()

  const navigate = useNavigate();
  const location = useLocation();
  //form sumbit
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        {email, password}
      );
      if (res && res.data.success) {
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token,
        });
        localStorage.setItem('auth',JSON.stringify(res.data));
        navigate("/");
        setTimeout(() => {
          toast.success(res.data.message);
          
        },1000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Register Ecommerce app">
     <div className="flex justify-center w-full md:mt-[3rem] ">
  <section className="side">
  <svg id="a547a8a3-aa5a-4f51-930d-f6b3f6f2d923" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width={433} height="728.58619" viewBox="0 0 733 728.58619"><path d="M460.45338,606.12459a10.05575,10.05575,0,0,0-15.32037-1.74408l-31.75443-16.3901,1.974,18.46448,29.8519,12.73351a10.11027,10.11027,0,0,0,15.24888-13.06381Z" transform="translate(-233.5 -85.7069)" fill="#ffb8b8" /><path d="M432.23309,613.55677a4.50491,4.50491,0,0,1-3.66895.03913L398.402,600.51183a46.37347,46.37347,0,0,1-23.462-22.69754L359.083,544.34312a14.49652,14.49652,0,1,1,22.90079-17.78059l27.87269,51.71357,25.73681,19.44154a4.51469,4.51469,0,0,1,1.58663,4.92131l-2.5261,8.15923a4.50568,4.50568,0,0,1-1.52373,2.21147A4.45458,4.45458,0,0,1,432.23309,613.55677Z" transform="translate(-233.5 -85.7069)" fill="#3683da" /><circle cx="124.88511" cy="394.71143" r="24.56103" fill="#ffb8b8" /><polygon points="134.833 716.908 147.093 716.907 152.925 669.619 134.831 669.62 134.833 716.908" fill="#ffb8b8" /><path d="M365.70636,799.111h38.53073a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H380.59322a14.88686,14.88686,0,0,1-14.88686-14.88686v0A0,0,0,0,1,365.70636,799.111Z" transform="translate(536.48027 1527.38448) rotate(179.99738)" fill="#2f2e41" /><polygon points="94.833 716.908 107.093 716.907 112.925 669.619 94.831 669.62 94.833 716.908" fill="#ffb8b8" /><path d="M325.70636,799.111h38.53073a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H340.59322a14.88686,14.88686,0,0,1-14.88686-14.88686v0A0,0,0,0,1,325.70636,799.111Z" transform="translate(456.48027 1527.38631) rotate(179.99738)" fill="#2f2e41" /><path d="M324.05247,789.07905a4.49855,4.49855,0,0,1-1.075-3.55859l21.4646-160.98536,53.32861,9.05664,5.69141-3.415L388.74461,782.92085a4.51231,4.51231,0,0,1-4.09619,3.96386l-16.14771,1.34571a4.49919,4.49919,0,0,1-4.86645-4.74219l4.18066-72.74219a.50006.50006,0,0,0-.98193-.16015l-20.68311,76.70019a4.50773,4.50773,0,0,1-4.34472,3.3291H327.43821A4.49845,4.49845,0,0,1,324.05247,789.07905Z" transform="translate(-233.5 -85.7069)" fill="#2f2e41" /><path d="M360.98484,635.80366a3.53282,3.53282,0,0,0-4.51611-.18848l-10.66186,8.293a4.49612,4.49612,0,0,1-7.08741-2.30664c-5.22973-18.31543-17.07837-64.418-14.15942-96.86621,1.65454-18.39258,17.53711-32.37109,35.405-31.19824,12.21557.81445,20.25195,7.86133,23.886,20.94433,8.92261,32.12207,18.72828,91.044,20.60328,102.53028a4.48015,4.48015,0,0,1-2.13648,4.58886A32.93894,32.93894,0,0,1,385.626,646.2978C378.50682,646.2978,369.97068,643.81928,360.98484,635.80366Z" transform="translate(-233.5 -85.7069)" fill="#3683da" /><path d="M365.00775,647.23025a10.05578,10.05578,0,0,0-10.9788-10.8269l-14.87184-32.49319-9.84154,15.74731,15.63137,28.44185a10.11027,10.11027,0,0,0,20.06081-.86907Z" transform="translate(-233.5 -85.7069)" fill="#ffb8b8" /><path d="M338.21556,635.663a4.505,4.505,0,0,1-2.91114-2.23339l-15.65918-28.90918a46.3735,46.3735,0,0,1-4.45434-32.33887l8.17847-36.12305a14.49652,14.49652,0,1,1,28.99267.1416l-9.98144,57.89258,8.25366,31.18067a4.51469,4.51469,0,0,1-1.78858,4.85156l-7.023,4.86133a4.50562,4.50562,0,0,1-2.56372.7998A4.45444,4.45444,0,0,1,338.21556,635.663Z" transform="translate(-233.5 -85.7069)" fill="#3683da" /><polygon points="116.869 474.908 107.869 512.908 120.869 544.908 111.869 513.908 116.869 474.908" opacity="0.2" /><path d="M355.56709,504.99461c-9.00781.204-17.90915-5.39788-21.97213-13.82771a26.81284,26.81284,0,0,1,2.41728-26.74452,23.99939,23.99939,0,0,1,24.05853-9.25612c4.954-3.15315,10.71388-5.27487,16.48671-4.73522s11.482,4.13228,13.64072,9.77051-.16039,13.0703-5.52812,15.36166c-3.44123,1.469-7.3273.7566-10.99972.16422s-7.67864-.97894-10.8748,1.00736-4.6329,7.31243-1.77045,9.79577a10.6539,10.6539,0,0,1,2.82887,11.36481C362.41536,501.79536,358.48887,504.92844,355.56709,504.99461Z" transform="translate(-233.5 -85.7069)" fill="#2f2e41" /><path d="M825.93369,258.65415h-3.99878V149.10883A63.40186,63.40186,0,0,0,758.53312,85.7069H526.44639a63.40187,63.40187,0,0,0-63.402,63.40171V750.083a63.40188,63.40188,0,0,0,63.40179,63.40192H758.53281a63.40187,63.40187,0,0,0,63.402-63.40167V336.6304h3.99878Z" transform="translate(-233.5 -85.7069)" fill="#e6e6e6" /><path d="M808.4401,149.5512v600.09a47.35072,47.35072,0,0,1-47.35,47.35h-233.2a47.35083,47.35083,0,0,1-47.35-47.35v-600.09a47.35088,47.35088,0,0,1,47.35-47.35h28.29a22.50659,22.50659,0,0,0,20.83,30.99h132.96a22.50674,22.50674,0,0,0,20.83-30.99h30.29A47.35088,47.35088,0,0,1,808.4401,149.5512Z" transform="translate(-233.5 -85.7069)" fill="#fff" /><path d="M780.78972,437.701a12.13174,12.13174,0,0,0-11.39217-8.01012H519.58266a12.09953,12.09953,0,0,0-12.10419,12.10418V633.49978A12.12136,12.12136,0,0,0,519.58266,645.604H769.39755a12.12135,12.12135,0,0,0,12.10418-12.10419V441.79507A12.01218,12.01218,0,0,0,780.78972,437.701Z" transform="translate(-233.5 -85.7069)" fill="#f2f2f2" /><path d="M780.78972,196.89786a12.13174,12.13174,0,0,0-11.39217-8.01012H519.58266a12.09953,12.09953,0,0,0-12.10419,12.10418V392.69663a12.12136,12.12136,0,0,0,12.10419,12.10419H769.39755a12.12135,12.12135,0,0,0,12.10418-12.10419V200.99192A12.01218,12.01218,0,0,0,780.78972,196.89786Z" transform="translate(-233.5 -85.7069)" fill="#fff" /><path d="M780.78972,196.89786a12.13174,12.13174,0,0,0-11.39217-8.01012H519.58266a12.09953,12.09953,0,0,0-12.10419,12.10418V392.69663a12.12136,12.12136,0,0,0,12.10419,12.10419H769.39755a12.12135,12.12135,0,0,0,12.10418-12.10419V200.99192A12.01218,12.01218,0,0,0,780.78972,196.89786Zm-.712,195.79877a10.69318,10.69318,0,0,1-10.68016,10.68017H519.58266a10.69318,10.69318,0,0,1-10.68016-10.68017V200.99192a10.69318,10.69318,0,0,1,10.68016-10.68016H769.39755a10.69318,10.69318,0,0,1,10.68016,10.68016Z" transform="translate(-233.5 -85.7069)" fill="#3f3d56" /><path d="M762.23488,214.68348V348.54493a3.369,3.369,0,0,1-3.36792,3.37017H531.62651a2.84118,2.84118,0,0,1-.483-.03757,3.367,3.367,0,0,1-2.88717-3.3326V214.68348a3.369,3.369,0,0,1,3.36788-3.37014H758.86472a3.369,3.369,0,0,1,3.37016,3.36791Z" transform="translate(-233.5 -85.7069)" fill="#e6e6e6" /><circle cx="352.03704" cy="175.63121" r="29.56668" fill="#3683da" /><path d="M678.25484,352.45175H533.20958a2.957,2.957,0,0,1-.542-.04294l68.59972-118.8246a4.80319,4.80319,0,0,1,8.361,0l46.039,79.74053,2.20564,3.81559Z" transform="translate(-233.5 -85.7069)" fill="#3f3d56" /><polygon points="444.755 266.745 395.233 266.745 419.543 231.433 421.293 228.89 422.168 227.618 424.373 231.433 444.755 266.745" opacity="0.2" style={{isolation: 'isolate'}} /><path d="M759.015,352.45175H633.56274l24.31019-35.31144,1.74945-2.54374L691.30073,268.579c2.07682-3.016,7.073-3.20377,9.51477-.56884a5.72644,5.72644,0,0,1,.45618.56884Z" transform="translate(-233.5 -85.7069)" fill="#3f3d56" /><path d="M716.20513,448.89786a12.13175,12.13175,0,0,0-11.39217-8.01012H454.99807a12.0995,12.0995,0,0,0-12.10419,12.10418V644.69663a12.12136,12.12136,0,0,0,12.10419,12.10419H704.813a12.12135,12.12135,0,0,0,12.10418-12.10419V452.99192A12.01218,12.01218,0,0,0,716.20513,448.89786Z" transform="translate(-233.5 -85.7069)" fill="#fff" /><path d="M716.20513,448.89786a12.13175,12.13175,0,0,0-11.39217-8.01012H454.99807a12.0995,12.0995,0,0,0-12.10419,12.10418V644.69663a12.12136,12.12136,0,0,0,12.10419,12.10419H704.813a12.12135,12.12135,0,0,0,12.10418-12.10419V452.99192A12.01218,12.01218,0,0,0,716.20513,448.89786Zm-.712,195.79877A10.69318,10.69318,0,0,1,704.813,655.3768H454.99807a10.69318,10.69318,0,0,1-10.68016-10.68017V452.99192a10.69318,10.69318,0,0,1,10.68016-10.68016H704.813a10.69318,10.69318,0,0,1,10.68016,10.68016Z" transform="translate(-233.5 -85.7069)" fill="#3f3d56" /><path d="M697.65029,466.68348V600.54493a3.369,3.369,0,0,1-3.36792,3.37017H467.04192a2.84118,2.84118,0,0,1-.483-.03757,3.367,3.367,0,0,1-2.88717-3.3326V466.68348a3.369,3.369,0,0,1,3.36788-3.37014H694.28013a3.369,3.369,0,0,1,3.37016,3.36791Z" transform="translate(-233.5 -85.7069)" fill="#e6e6e6" /><circle cx="287.45245" cy="427.63121" r="29.56668" fill="#3683da" /><path d="M613.67025,604.45175H468.625a2.957,2.957,0,0,1-.542-.04294l68.59972-118.8246a4.80319,4.80319,0,0,1,8.361,0l46.039,79.74053,2.20564,3.81559Z" transform="translate(-233.5 -85.7069)" fill="#3f3d56" /><polygon points="380.17 518.745 330.648 518.745 354.958 483.433 356.708 480.89 357.583 479.618 359.789 483.433 380.17 518.745" opacity="0.2" style={{isolation: 'isolate'}} /><path d="M694.43038,604.45175H568.97815l24.31019-35.31144,1.74945-2.54374L626.71614,520.579c2.07682-3.01595,7.073-3.20377,9.51476-.56884a5.7251,5.7251,0,0,1,.45619.56884Z" transform="translate(-233.5 -85.7069)" fill="#3f3d56" /><path d="M604.34185,729.2931h-72a18.5,18.5,0,0,1,0-37h72a18.5,18.5,0,0,1,0,37Z" transform="translate(-233.5 -85.7069)" fill="#3683da" /><path d="M747.42193,729.2931h-72a18.5,18.5,0,0,1,0-37h72a18.5,18.5,0,0,1,0,37Z" transform="translate(-233.5 -85.7069)" fill="#f2f2f2" /><path d="M965.5,814.2931h-731a1,1,0,1,1,0-2h731a1,1,0,0,1,0,2Z" transform="translate(-233.5 -85.7069)" fill="#3f3d56" /></svg>

  </section>
  <section className="main">
    <div className="login-container">
      <p className="title">Welcome back</p>
      <div className="separator" />
      <p className="welcome-message">Please, provide login credential to proceed and have access to all our services</p>
      <form className="login-form" onSubmit={handelSubmit}>
        <div className="form-control2">
          <input className="input1" type="email" placeholder="Username"  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required />
          <i className="fas fa-user" />
        </div>
        <div className="form-control2">
          <input className="input1" type="password" placeholder="Password"   value={password}
                  onChange={(e) => setPassword(e.target.value)} />
          <i className="fas fa-lock " />
        </div>
        <div className="flex flex-row gap-3 justify-center">
        <NavLink className="" to="/forgot-password" >forgot password?</NavLink>
        <p>|</p>
        <NavLink className="" to="/register" >Create a Account</NavLink>
        </div>
        <button className="submit">Login</button>
      </form>
    </div>
  </section>
</div>

    </Layout>
  );
};

export default Login;
