import {Phormal, useEmail, useLength, useRequired} from "@phormal/core";
import {useEffect} from "react";

const BasicDemo = () => {

  useEffect(() => {
    const form = new Phormal({
      name: {
        label: 'Name',
        hooks: [useRequired(), useLength(3)],
      },
      email: {
        label: 'Email',
        hooks: [useRequired(), useEmail()],
      }
    }, {
      el: '#phormal',
      theme: 'basic',
      language: 'es',
    })
  }, [])

  return <>
    <br />
    <div id="phormal">

    </div>
  </>
}

export default BasicDemo