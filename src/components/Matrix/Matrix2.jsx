import React from "react";
import "./Style.css";

export default function Matrix2() {
  return (
    <div className="container">
      <table className="main-table">
        <thead>
          <tr>
            <th>Matrix 2</th>
            <th>All</th>
            <th>Texas</th>
            <th>California</th>
            <th>Contractors</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>All</th>
            <td>4621</td>
            <td>123</td>
            <td>140</td>
            <td>52</td>
          </tr>
          <tr>
            <th>Texas</th>
            <td>54</td>
            <td>7</td>
            <td>41</td>
            <td>6</td>
          </tr>
          <tr>
            <th>California</th>
            <td>36</td>
            <td>18</td>
            <td>36</td>
            <td>1</td>
          </tr>
          <tr>
            <th>Contractors</th>
            <td>82</td>
            <td>75</td>
            <td>40</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
