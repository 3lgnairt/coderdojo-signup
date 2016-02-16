angular.module("coderdojo-signup").run(["$templateCache", function($templateCache) {$templateCache.put("app/accept/accept.html","<div class=container><div class=row><div class=\"col-md-10 col-md-offset-1\"><h1>Congratulations!</h1><p class=text-center><b>You have successfully signed up for the CoderDojo Term 1 at Bankwest starting on the 1st of March.</b> We will be sending you a calendar invite shortly. Please remember that if a ninja is under the age of 12 an adult must attend the sessions with them and accompany them at all times. Space is limited for this event so if you find any of the ninjas you registered can no longer attend please let us know as soon as possible.</p><br><p class=text-center>If you have any further questions please contact us at: <b>coderdojo@bankwest.com.au</b></p></div></div></div>");
$templateCache.put("app/closed/closed.html","<div class=container><div class=row><div class=\"col-md-6 col-md-offset-3\"><h1>Sign ups are closed</h1><h5 class=text-center>Thank you for your interest in Bankwest CoderDojo. We regret to inform you that sign ups are now closed. We have either reached capacity or the registration time period has passed. Keep an eye out for ways to get involved in Bankwest CoderDojo events in the future.</h5><br><h5 class=text-center>For more information contact:&nbsp;<b>coderdojo@bankwest.com.au</b></h5></div></div></div>");
$templateCache.put("app/error/error.html","<div class=container><div class=row><div class=\"col-md-6 col-md-offset-3 text-center\"><h1>Error</h1><h5>An error has occurred, either try again or let us know that an error has occurred at coderdojo@bankwest.com.au.</h5></div></div></div>");
$templateCache.put("app/form/form.html","<div class=container><div class=row><h2 class=\"col-md-12 text-center\">CoderDojo Term 1 2016 at Bankwest</h2></div><div class=row><div class=col-md-12><h4>Info:</h4><p>The 1st Term of CoderDojo form 2016 will begin on the Tuesday the 1st of March and will run for 4 weeks. Sessions will run from 4:30pm till 6pm on the Podium level on Bankwest place.</p><p>As part of CoderDojo we offer a range of activities shown below however they should not limit themselves to just the ones we provide.</p><p>At the end of each session we will hold a showcase where ninjas can come up and show their work.</p><p style=\"font-weight: 600;\">Please note that unlike previous terms, we will not be providing afternoon tea.</p><p>We will be providing laptops but if a ninja has a laptop they would like to use, they are welcome to bring it.</p></div></div><br><div class=row><div class=col-md-12><h4>Ninja Registration:</h4></div><form name=rego class=col-md-12 role=form ng-submit=vm.register()><div ng-repeat=\"ninja in vm.form.ninjas\" class=form-inline><div class=form-group><label for=ninjaFirstName class=sr-only>Ninja First Name</label> <input type=text class=form-control id=ninjaFirstName placeholder=\"Ninja First Name\" ng-model=ninja.firstName ng-required=true required></div><div class=form-group><label for=ninjaLastName class=sr-only>Ninja Last Name</label> <input type=text class=form-control id=ninjaLastName placeholder=\"Ninja Last Name\" ng-model=ninja.lastName ng-required=true required></div><div class=form-group><label for=ninjaBday class=control-label>Ninja Birthday*</label><div class=input-group ng-init=\"opened=false\"><input type=date class=form-control id=ninjaBday datepicker-popup ng-model=ninja.birthday is-open=opened min-date=vm.minDate max-date=vm.maxDate ng-required=true close-text=Close min=1999-02-02 max=2009-02-02 required> <span class=input-group-addon><i class=\"fa fa-calendar fa-fw\" ng-click=\"opened = !opened\"></i></span></div></div><div class=form-group ng-show=\"vm.form.ninjas.length > 1\"><i class=\"fa fa-trash-o fa-lg\" ng-click=vm.remove(ninja) tooltip=\"Remove Ninja\" tooltip-placement=right></i></div><div class=form-group style=\"margin-top: 15px\"><p class=control-label>We run a range of activities for the ninjas, what activities would they be interested in? (Tick all that apply)</p><div class=checkbox ng-repeat=\"activity in ninja.activities\"><label for=activities style=\"padding-right: 15px; padding-top:15px\"><input type=checkbox id=activities ng-model=activity.selected> {{activity.name}}</label></div></div></div><div class=form-group><button type=button class=\"btn btn-success btn-sm\" ng-click=vm.add()>Add Another Ninja</button></div><div class=form-group><p>* Note that this event is only ninjas aged 7 to 17 and all ninjas under the age of 12 must be accompanied by an adult at all times</p></div><br><h4>Parent/Guardian Information:</h4><div class=form-inline><div class=form-group><label for=parentFirstName class=sr-only>Parent/Guardian First Name</label> <input type=text class=form-control id=parentFirstName placeholder=\"Parent First Name\" ng-model=vm.form.parent.firstName ng-required=true required></div><div class=form-group><label for=parentLastName class=sr-only>Parent/Guardian Last Name</label> <input type=text class=form-control id=parentLastName placeholder=\"Parent Last Name\" ng-model=vm.form.parent.lastName ng-required=true required></div><div class=form-group><label for=parentEmail class=sr-only>Parent Email</label> <input type=email class=form-control id=parentEmail placeholder=\"Parent Email\" ng-model=vm.form.parent.email ng-required=true required></div><div class=form-group><label for=parentPhone class=sr-only>Parent Phone Number</label> <input type=text class=form-control id=parentPhone placeholder=\"Parent Phone Number\" ng-model=vm.form.parent.phone ng-required=true required></div></div><div ng-show=vm.isBw><h4>Bankwest Contact Name:</h4><div class=form-inline><div class=form-group><label for=bwFirstName class=sr-only>Bankwest Contact First Name</label> <input type=text class=form-noncontrol id=bwFirstName placeholder=\"Contact First Name\" ng-model=vm.form.bwContact.firstName></div><div class=form-group><label for=bwLastName class=sr-only>Bankwest Contact Last Name</label> <input type=text class=form-noncontrol id=bwLastName placeholder=\"Contact Last Name\" ng-model=vm.form.bwContact.lastName></div></div></div><br><h4>Photo Release Waiver:</h4><p>By participating in this CoderDojo Event, you understand that photos/video may be taken of your child and/or yourself by Bankwest and/or CoderDojo WA and that these photos/videos may be used in social or other media to promote Bankwest\'s support of CoderDojo and the CoderDojo movement. By attending, you agree to the use of your and/or your child\'s image for the purposes of promoting CoderDojo/Bankwest.</p><div class=checkbox><label for=photoWaiver><input type=checkbox id=photoWaiver ng-model=vm.form.photoPermission required>By checking this box, you understand and give permission for CoderDojo WA and Bankwest to use photomedia of my child at the Dojo event to promote the CoderDojo movement.</label></div><br><div class=form-group><label for=comments class=control-label>Any Additional Comments?</label> <textarea rows=2 columns=50 id=comments ng-model=vm.form.comments class=form-control></textarea></div><div class=form-group><button type=submit class=\"btn btn-bw\">Submit Registration</button></div></form></div></div>");
$templateCache.put("app/view/view.html","<div class=container><table class=table><thead><tr><td>#</td><td>Name</td><td>Email</td><td>Phone</td><td>Ninja Name</td><td>Ninja Age</td><td>Laptop Required</td></tr></thead><tbody ng-repeat=\"ninja in ninjas\"><tr><td></td><td>{{ninja.parent.firstName}} {{ninja.parent.lastName}}</td><td>{{ninja.parent.email}}</td><td>{{ninja.parent.phone}}</td><td colspan=3></td></tr><tr ng-repeat=\"n in ninja.ninjas\"><td></td><td colspan=3></td><td>{{n.firstName}}</td><td>{{n.lastName}}</td><td>{{n.birthday}}</td></tr></tbody></table></div>");}]);