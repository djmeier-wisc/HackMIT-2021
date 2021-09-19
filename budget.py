import json, datetime, os.path, time, copy
categories = ["groceries", "eating out", "transportation", "entertainment", "investing", "gifts", "personal care", "miscellaneous"]
monthlyExpensesFormat = {
        "fixedExpenses": {
            "rent": 0,
            "internet": 0,
            "utilities": 0,
            "tuition": 0,
            "healthInsurance": 0,
            "phone": 0
        },
        "flexibleExpenses": {
            "groceries": 0,
            "eating out": 0,
            "transportation": 0,
            "entertainment": 0,
            "investing": 0,
            "gifts": 0,
            "personal care": 0,
            "miscellaneous": 0
        },
        "subscriptions": 0
}

def jsonSave(fileName, data):
    with open(fileName, 'w') as outfile:
        json.dump(data, outfile)

def jsonLoad(fileName):
    with open(fileName) as json_file:
        return json.load(json_file)

#Set the initial monthlyActualExpenses and monthlyProjectedExpenses to a blank format
jsonSave("monthlyActualExpenses.json", monthlyExpensesFormat)
if (not os.path.exists("monthlyProjectedExpenses.json")):
    jsonSave("monthlyProjectedExpenses.json", monthlyExpensesFormat)


def logNewExpense(category, name, amount):
    #Try to load the expenses, if failed start expenses from scratch
    if os.path.exists("rawExpenses.json"):
        expenses = jsonLoad("rawExpenses.json")
    else:
        expenses = {}

    if category.lower() not in categories:
        raise ValueError("category must be of the types: groceries, eatingOut, transportation, entertainment, investing, gifts, personalCare, miscellaneous. Input: " + category)
    if not (isinstance(amount, int) or isinstance(amount, float)):
        raise TypeError("amount must be either an int or float. Input: " + amount)
    #Set the key of expenses to the date, so expenses can be parsed out by month for the monthly expenses
    expenses[datetime.datetime.now().strftime("%m/%d/%Y, %H:%M:%S")] = {"category": category.lower(), "name": name, "amount": amount}

    jsonSave("rawExpenses.json", expenses)
    #After each new expense is logged, the monthly budget will be updated
    updateMonthlyActualExpenses()
    
def updateMonthlyActualExpenses():
    monthlyActualExpenses = copy.deepcopy(monthlyExpensesFormat)
    print(monthlyExpensesFormat)
    print()
    monthlyActualExpenses["fixedExpenses"] = jsonLoad("monthlyProjectedExpenses.json")["fixedExpenses"]
    print(monthlyActualExpenses)
    print()
    try:
        expenses = jsonLoad("rawExpenses.json")
    except:
        jsonSave("monthlyActualExpenses.json", monthlyActualExpenses)
        raise FileNotFoundError("No expenses have been created yet to update the monthly expenses")
    #If the month of the expense matches the current month, add the amount to the corresponding category
    for key, value in expenses.items():
        if datetime.datetime.strptime(key, "%m/%d/%Y, %H:%M:%S").month == datetime.datetime.now().month:
            monthlyActualExpenses["flexibleExpenses"][value["category"]] += value["amount"]
    print(monthlyActualExpenses)
    print("___________________________________________________________________________")
    jsonSave("monthlyActualExpenses.json", monthlyActualExpenses)

def monthlyProjectedExpenses(rent, internet, utilities, tuition, healthInsurance, phone, groceries, eatingOut, transportation, entertainment, investing, gifts, personalCare, miscellaneous, subscriptions):
    monthlyProjectedExpenses = {
        "fixedExpenses": {
            "rent": rent,
            "internet": internet,
            "utilities": utilities,
            "tuition": tuition,
            "healthInsurance": healthInsurance,
            "phone": phone
        },
        "flexibleExpenses": {
            "groceries": groceries,
            "eating out": eatingOut,
            "transportation": transportation,
            "entertainment": entertainment,
            "investing": investing,
            "gifts": gifts,
            "personal care": personalCare,
            "miscellaneous": miscellaneous
        },
        "subscriptions": subscriptions
    }
    jsonSave("monthlyProjectedExpenses.json", monthlyProjectedExpenses)

#Generate the MonthlyActualExpenses.json if data already exists
if (os.path.exists("rawExpenses.json")):
    updateMonthlyActualExpenses()

#monthlyProjectedExpenses(681.25, 45, 23, 3000, 500, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0)
# logNewExpense("groceries", "the nom nom", 55.55)
# time.sleep(1)
# logNewExpense("eating out", "B dubs", 20)
# time.sleep(1)
# logNewExpense("transportation", "gas", 12)
# time.sleep(1)
# logNewExpense("entertainment", "dwayne movie", 23.74)
# time.sleep(1)
# logNewExpense("investing", "GME to the moon", 420.69)
# time.sleep(1)
# logNewExpense("gifts", "Jordon's bday", 75)
# time.sleep(1)
# logNewExpense("personal care", "luxurious hair cut", 3.14)
# time.sleep(1)
# logNewExpense("miscellaneous", "stuff", 229)
# time.sleep(1)
#logNewExpense("personal care", "haircut fix...", 33)