import React from 'react';
import "./style.css";

function skill() {
    return (
        <div className="container-fluid mt-5">
            <div className="container col-lg-6 col-md-8 col-sm-12 skillbg">
                <h2 className="header">
                    Technical Skills
                </h2>
                <table className="table table-hover table-sm table-responsive-sm">
                    <tbody>
                        <tr>
                            <td>
                                React
                           </td>
                            <td>
                                Visual Studio Code
                           </td>
                            <td>
                                Bootstrap
                           </td>
                        </tr>
                        <tr>
                            <td>
                                Handlebars
                           </td>
                            <td>
                                MySQL Workbench
                           </td>
                            <td>
                                Mongo
                           </td>
                        </tr>
                        <tr>
                            <h2 className="header mt-3">
                                Languages
                            </h2>
                        </tr>
                        <tr>
                            <td>
                                JavaScript
                            </td>
                            <td>
                                HTML
                                </td>
                            <td>
                                CSS
                                </td>
                            <td>
                                SQL
                                </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default skill;