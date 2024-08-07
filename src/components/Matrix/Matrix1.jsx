import React from "react";
import "./Style.css";

export default function Matrix1() {
  return (
    <div className="container">
      <table className="main-table">
        <thead>
          <tr>
            <th>Matrix 1</th>
            <th>All</th>
            <th>Mexico</th>
            <th>Border</th>
            <th>Border Wall</th>
            <th>
              Arizona
              <br />+ Latinos
            </th>
            <th>Trump</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>All</td>
            <td>4621</td>
            <td>96</td>
            <td>222</td>
            <td>87</td>
            <td>54</td>
            <td>525</td>
          </tr>
          <tr>
            <td>Immigration</td>
            <td>100</td>
            <td>20</td>
            <td>41</td>
            <td>6</td>
            <td>12</td>
            <td>43</td>
          </tr>
          <tr>
            <td>Border Patrol</td>
            <td>36</td>
            <td>18</td>
            <td>36</td>
            <td>1</td>
            <td>2</td>
            <td>9</td>
          </tr>
          <tr>
            <td>Cartels</td>
            <td>82</td>
            <td>75</td>
            <td>40</td>
            <td>22</td>
            <td>5</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Deportation</td>
            <td>57</td>
            <td>43</td>
            <td>31</td>
            <td>15</td>
            <td>2</td>
            <td>39</td>
          </tr>
          <tr>
            <td>Enforcement</td>
            <td>67</td>
            <td>60</td>
            <td>28</td>
            <td>52</td>
            <td>3</td>
            <td>29</td>
          </tr>
          <tr>
            <td>Supreme Court</td>
            <td>98</td>
            <td>35</td>
            <td>19</td>
            <td>10</td>
            <td>1</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Drugs</td>
            <td>38</td>
            <td>12</td>
            <td>15</td>
            <td>6</td>
            <td>1</td>
            <td>8</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
