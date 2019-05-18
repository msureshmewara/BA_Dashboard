import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#faf8f6',
  },
  dashBoardHeaderImage: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  welcome: {
    fontSize: 20
  },
  dashboardHeaderImage: {
    width: 200,
    height: 200,
    overflow: "hidden",
  },
  dashboardHeaderImageText: {
    color: '#0fc66a',
    fontSize:20,
    fontWeight : 'bold',
    textAlign: 'center',
    marginTop: 10,
  }, 
  progressBarStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressBarText: {
    color: '#0fc66a',
    fontSize:20,
    marginLeft: 30,
    fontWeight : 'bold',
    textAlign: 'center',
  }, 
  cardViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#fffff5',
    
    shadowOpacity: 0.8,
    shadowRadius: 2,
    margin: 3,
    padding: 5,
  },
  cardViewImage: {
    width: 70,
    height: 70,
    borderRadius: 30 / 2,
    borderWidth: 0,
    borderColor: "#f2f2f2",
  },
  listTitleText: {
    fontSize:20,
    fontWeight : 'bold',
    textAlign: 'left',
  }, 
  listDetailsText: {
    textAlign: 'left',
  }, 
  listViewText: {
      marginLeft: 10,
    textAlign: 'left',
  }, 
});