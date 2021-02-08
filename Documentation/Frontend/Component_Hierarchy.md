# Component Hierarchy

React's nature of encouraging more granular components than Angular is a major motivation for porting ohm-str to React. This is Michael's initial take on a component structure at a higher level, with more 
subcomponents likely to follow.

## Draft 1

* Navbar
    * SideDrawer 
    * RecordDatePicker 
* Body *(currently not used)*
    * Home
        * RecordDatePicker
    * Records
        *  AllDayRecords
        *  DayRecord
        *  EditDayRecord
    * Profile
* Footer? *(currently not used)*