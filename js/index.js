 $(document).ready(function () {
            var entry = '';
            var currentEntry = '';
            var lastEntryIsEqual = false;
            $(".number").click(function () {

                if (checkEntryLength()) {
                    var totalEntry = entry.length;
                    if (entry!=='' && lastEntryIsEqual) {
                        entry = '';
                        currentEntry = '';
                    }
                        entry += $(this).text();
                        currentEntry += $(this).text();
                        $("#input").html(currentEntry);
                        $("#allInput").html(entry);
                }
                else {
                    entry = '';
                    currentEntry = '';
                }
                lastEntryIsEqual = false;
                
            });
            $(".operator").click(function () {
                lastEntryIsEqual = false;
                if(entry==='')
                {
                    $("#input").html(0);
                    $("#allInput").html(0);
                }
                else
                {
                    if (checkEntryLength())
                    {
                        currentEntry = '';
                        //check if user enters two operators consequetively.
                        var totalEntry = entry.length;
                        if (entry[totalEntry - 1] === "+" || entry[totalEntry - 1] === "-" || entry[totalEntry - 1] === "*" || entry[totalEntry - 1] === "/")
                        {
                            $("#input").html(entry);
                            $("#allInput").html(entry);
                        }
                        else if(entry[totalEntry - 1]=== '='){
                            $("#input").html($(this).text());
                            entry += $(this).text();
                            $("#allInput").html(entry);
                        }
                        else {
                            $("#input").html($(this).text());
                            entry += $(this).text();
                            $("#allInput").html(entry);
                        }

                    }

                }
            });
            $("#equal").click(function () {
                var answer = eval(entry).toFixed(2);
                if (answer.length > 12)
                {
                    $("#input").html(0);
                    $("#allInput").html("<p style='font-size:12px'>Exceeds Max Limit</p>");
                    entry = '';
                }
                else {
                    $("#input").html(eval(entry).toFixed(2));
                    entry = eval(entry).toFixed(2);
                }
                lastEntryIsEqual = true;
            });

            $("#clear").click(function () {

                $("#input").html(0);
                $("#allInput").html(0);
                entry = '';
                currentEntry = '';

            });


            $("#clearLastEntry").click(function () {
              
                var end = entry.length-currentEntry.length;
                //alert(currentEntry);
                //alert(entry);
                //alert(entry.slice(0, end));
                //var str = entry.replace(currentEntry, "");
                entry = entry.slice(0, end);
                $("#input").html(0);
                $("#allInput").html(entry);
                currentEntry = '';
            });

            $("#off").click(function () {
                entry = '';
                currentEntry = '';
                $("#input").html("");
                $("#allInput").html("");
            });

            function checkEntryLength()
            {
                if (entry.length > 12) {
                    $("#input").html(0);
                    $("#allInput").html("<p style='font-size:12px'>Exceeds Max Limit</p>");
                    entry = '';
                    return false;
                }
                else
                    return true;
            }

        });
