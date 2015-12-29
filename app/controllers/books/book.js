import Ember from 'ember';

export default Ember.Controller.extend({
                                         actions: {
                                           select: function (book)
                                           {
                                             console.log("nagendra:" + book.get('title'));
                                             window.location = "sampleData.xlsx";

                                           }
                                         }
                                       });
